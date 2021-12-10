export const QUERYABLE_FIELD_TYPES = ['string', 'number', 'slug', 'object']

export const OPERATORS = [
  {
    label: 'Equals',
    value: '==',
  },
  {
    label: 'Does Not Equal',
    value: '!=',
  },
  {
    label: 'Greater Than',
    value: '>',
  },
  {
    label: 'Less Than',
    value: '<',
  },
  {
    label: 'Greater Than or Equal',
    value: '>=',
  },
  {
    label: 'Less Than or Equal',
    value: '<=',
  },
  {
    label: 'Contains',
    value: 'match',
  },
  {
    label: 'Starts With',
    value: 'startsWith',
  },
  {
    label: 'In',
    value: 'in',
  },
]

export const PATH_FUNCTIONS = ['defined', 'count', 'length', 'upper', 'lower']

export const VALUE_FUNCTIONS = ['now', 'identity']
