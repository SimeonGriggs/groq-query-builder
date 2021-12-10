import React, {useMemo, useCallback, useState, useEffect} from 'react'
import {
  Box,
  Code,
  Text,
  Button,
  Card,
  Flex,
  Grid,
  Label,
  Select,
  Stack,
  TextInput,
  Switch,
} from '@sanity/ui'
import {AddCircleIcon, TrashIcon, IceCreamIcon} from '@sanity/icons'
import {SchemaType} from '@sanity/types'

import {OPERATORS, PATH_FUNCTIONS, VALUE_FUNCTIONS} from './lib/constants'
import {QuerySegment} from './lib/types'
import {getQueryableFields} from './lib/getQueryableFields'
import {leftPad} from './lib/leftPad'

const inputProps = {
  fontSize: 1,
  radius: 2,
  padding: 2,
}

export default function QueryRow({
  segment,
  fields,
  handleUpdate,
  handleDelete,
}: {
  segment: QuerySegment
  fields: SchemaType[]
  handleUpdate: Function
  handleDelete: Function
}) {
  const [localSegment, setLocalSegment] = useState(segment)
  const [debugMode, setDebugMode] = useState(false)

  // Only specific fields can be queried
  // This function processes them into a flat schema with paths
  const queryableFields = useMemo(() => getQueryableFields(fields), [])

  // Set the initial segment dropdowns state
  useEffect(() => {
    if (!segment.path && !segment.operator && queryableFields.length) {
      setLocalSegment({
        ...segment,
        path: queryableFields[0].field.name,
        type: queryableFields[0].field.type,
        operator: OPERATORS[0].value,
      })
    }
  }, [segment])

  // Pass updated value back up to query
  const handleChange = useCallback(
    (event) => {
      // Update field `type` when path changes
      const updatedType =
        event.target.name === 'path'
          ? queryableFields.find((field) => field.fieldPath === event.target.value)?.field.type
          : localSegment.type

      if (!updatedType) {
        throw new Error(`Could not find "type" for field ${event.target.name}`)
      }

      const updatedSegment = {
        ...localSegment,
        [event.target.name]: event.target.value,
        type: updatedType,
      }

      setLocalSegment(updatedSegment)

      handleUpdate(segment._key, updatedSegment)
    },
    [segment, localSegment]
  )

  //   console.log(queryableFields)
  //   console.log(localSegment)

  return (
    <Card>
      <Stack space={2}>
        <Label muted size={0}>
          {localSegment?.type}
        </Label>
        <Grid columns={4} gap={2}>
          <Box>
            <Select
              {...inputProps}
              onChange={handleChange}
              name="pathFunction"
              defaultValue={localSegment.pathFunction}
              disabled={queryableFields.length === 0}
            >
              <option value="">Function</option>
              {PATH_FUNCTIONS.map((pathFunction) => (
                <option key={pathFunction} value={pathFunction}>
                  {pathFunction}()
                </option>
              ))}
            </Select>
          </Box>
          <Box columnStart={2} columnEnd={5}>
            <Select
              {...inputProps}
              onChange={handleChange}
              name="path"
              defaultValue={localSegment.path}
              disabled={queryableFields.length === 0}
            >
              {queryableFields.length > 0 ? (
                queryableFields.map(({title, fieldPath, level}) => (
                  <option
                    key={fieldPath}
                    value={fieldPath}
                    style={{paddingLeft: typeof level === 'number' ? level * 10 : undefined}}
                  >
                    {leftPad(level)} {title}
                    {/* {fieldPath} */}
                  </option>
                ))
              ) : (
                <option>No queryable fields</option>
              )}
            </Select>
          </Box>
        </Grid>
        <Flex gap={2} align="center">
          <Box flex={1}>
            <Select
              {...inputProps}
              onChange={handleChange}
              name="operator"
              defaultValue={localSegment.operator}
              disabled={queryableFields.length === 0}
            >
              {OPERATORS.map((operator) => (
                <option key={operator.value} value={operator.value}>
                  {operator.label}
                </option>
              ))}
            </Select>
          </Box>
          <Box flex={1}>
            <TextInput
              {...inputProps}
              onChange={handleChange}
              name="value"
              placeholder="Value"
              value={localSegment.value}
              disabled={queryableFields.length === 0}
            />
          </Box>
          <Box>
            <Select
              {...inputProps}
              onChange={handleChange}
              name="valueFunction"
              defaultValue={localSegment.valueFunction}
              disabled={queryableFields.length === 0}
            >
              <option value="">Function</option>
              {VALUE_FUNCTIONS.map((valueFunction) => (
                <option key={valueFunction} value={valueFunction}>
                  {valueFunction}()
                </option>
              ))}
            </Select>
          </Box>
          <Box>
            <Button
              {...inputProps}
              icon={TrashIcon}
              mode="bleed"
              tone="critical"
              onClick={() => handleDelete(segment._key)}
              disabled={queryableFields.length === 0}
            />
            <Button
              {...inputProps}
              icon={AddCircleIcon}
              mode="bleed"
              tone="positive"
              disabled={queryableFields.length === 0}
            />
          </Box>
          <Switch checked={debugMode} onClick={() => setDebugMode(!debugMode)} />
        </Flex>
      </Stack>

      {debugMode && queryableFields.length > 0 && (
        <Box paddingY={4}>
          <Stack space={4}>
            {queryableFields.map((field) => (
              <Stack space={2} key={field.fieldPath}>
                <Text size={1}>{field.title}</Text>
                <Code size={1}>Path: {field.fieldPath}</Code>
                <Code size={1}>Type: {field.field.type}</Code>
              </Stack>
            ))}
          </Stack>
        </Box>
      )}
    </Card>
  )
}
