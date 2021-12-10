import {QuerySegment} from './types'

// Finess the path based on the type
function createPath(segment: QuerySegment) {
  const {type, pathFunction, path} = segment

  let returnPath = ``

  switch (type) {
    case 'slug':
      returnPath = `${path}.current`
      break
    default:
      returnPath = path
      break
  }

  return pathFunction ? `${pathFunction}(${returnPath})` : returnPath
}

// Sometimes we use fake operators to make the builder more readable
function createOperator(segment: QuerySegment) {
  const {pathFunction, operator, value, valueFunction} = segment

  if (pathFunction === 'defined') {
    return ``
  }

  if (!value && !valueFunction) {
    return ``
  }

  switch (operator) {
    case 'startsWith':
      return `match`
    default:
      return operator
  }
}

// Finess how the value renders based on operator and type
function createValue(segment: QuerySegment) {
  const {type, pathFunction, operator, value, valueFunction} = segment

  if (valueFunction) {
    return `${valueFunction}()`
  }

  if (pathFunction === 'defined') {
    return ``
  }

  let returnValue = ``

  switch (type) {
    case 'string':
    case 'text':
      if (pathFunction === 'count' || pathFunction === 'length') {
        returnValue = value
        break
      }

      if (operator === 'startsWith') {
        returnValue = `"${value}*"`
        break
      }

      returnValue = `"${value}"`
      break
    case 'number':
    case 'array':
      returnValue = value
      break
    default:
      returnValue = `"${value}"`
      break
  }

  return returnValue
}

// Turn our big query array into a GROQ-ready string
export function createQueryString(query: QuerySegment[]) {
  const built = query
    .filter(
      ({path, pathFunction, operator, value, valueFunction}) =>
        path && operator && (value || pathFunction || valueFunction)
    )
    .map((segment) => {
      let segmentValues = [createPath(segment), createOperator(segment), createValue(segment)]
        .filter(Boolean)
        .join(` `)

      // 'in' operator needs to reverse the segment
      if (segment.operator === 'in') {
        segmentValues = segmentValues.split(` in `).reverse().join(` in `)
      }

      return `${` `} ${segmentValues}`
    })

  return `*[\n${built.join(` && \n`)}\n]`
}
