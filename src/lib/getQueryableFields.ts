import {Schema, SchemaType} from '@sanity/types'
import {nanoid} from 'nanoid'

import schema from '../schemas/schema'
import {toTitleCase} from './toTitleCase'

const {types}: {types: SchemaType[]} = schema._original

interface SelectableField {
  field: SchemaType
  fieldPath: string
  title: string
  level: number
}

function getChildren(field: SchemaType): SelectableField[] {
  // Native Object with fields
  if (field?.fields?.length) {
    return field.fields
  }

  // Array with fields
  if (field?.of?.length) {
    return field.of
  }

  // Reference field, follow schemas
  if (field?.type === 'reference') {
    return field.to.map((to) => types.find((type) => type.name === to.type))
  }

  // TODO: Exit early if an in-built type

  // Registered Schema Object with fields
  const registeredSchema = types.find((type) => type.name === field.type)
  if (registeredSchema?.fields) {
    return registeredSchema.fields
  }

  return []
}

function processField(field: SchemaType, parent: SelectableField) {
  let fieldPath = ``
  let title = ``

  // When we come across a `document` type, it is skipped over
  const level =
    typeof field.type === 'string' && field.type === 'document' ? parent.level : parent.level + 1

  if (typeof field.type === 'string' && typeof parent.field.type === 'string') {
    switch (parent?.field?.type) {
      case 'array':
        fieldPath = parent.fieldPath.endsWith(`[]`) ? parent.fieldPath : `${parent.fieldPath}[]`
        title = `${parent.title}, Array of ${field.name ? `"${createFieldTitle(field)}"` : ``} ${
          field.type?.toUpperCase() === field.name?.toUpperCase() ? null : createFieldTitle(field)
        }`
        break
      case 'reference':
        fieldPath = parent.fieldPath
        title = `${createFieldTitle(parent.field)} Reference`
        break
      case 'document':
        fieldPath = `${parent.fieldPath}->${field.name ?? field.type}`
        title = `Reference to ${
          parent?.field?.title ?? toTitleCase(parent.field.name)
        } -> ${createFieldTitle(field)}`
        break
      default:
        fieldPath = level > 1 ? `${parent.fieldPath}.${field.name ?? field.type}` : parent.fieldPath
        title =
          level > 1 ? `${parent.title} . ${field.title ?? toTitleCase(field.name)}` : parent.title
        break
    }
  }

  return {
    field,
    fieldPath,
    title,
    level,
  }
}

function createFieldTitle(field: SchemaType) {
  return field.name ? field.title ?? toTitleCase(field.name) : toTitleCase(field?.type)
}

function getInnerFields(childFields: any[], parent: any): SelectableField[] {
  return childFields.reduce((acc: any, cur: any) => {
    const child = processField(cur, parent)
    const children = getChildren(cur)

    if (children.length) {
      const innerFields = getInnerFields(children, child)

      if (innerFields.length) {
        return cur.type === 'document'
          ? // Document type is not queryable
            [...acc, ...innerFields]
          : [...acc, child, ...innerFields]
      }
    }

    return [...acc, child]
  }, [])
}

export function getQueryableFields(fields: Array<any> = []): SelectableField[] {
  if (!fields.length) return []

  const selectable = fields.reduce((acc: any, cur: any) => {
    const fieldPath = cur.name ?? cur.type
    const title = createFieldTitle(cur)
    const level: number = 0
    const initialParent = {field: cur, fieldPath, title, level}

    const parent = processField(cur, initialParent)
    const children = getChildren(cur)

    if (children.length) {
      const innerFields = getInnerFields(children, parent)

      if (innerFields.length) {
        return [...acc, parent, ...innerFields]
      }
    }

    return [...acc, parent]
  }, [])

  return selectable
}
