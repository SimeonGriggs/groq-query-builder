import {useState, useCallback, useEffect, useRef} from 'react'
import {SchemaType} from '@sanity/types'
import {
  Box,
  Button,
  Card,
  Code,
  Container,
  Select,
  Stack,
  studioTheme,
  Text,
  ThemeProvider,
} from '@sanity/ui'
import {AddCircleIcon} from '@sanity/icons'
import {nanoid} from 'nanoid'
import {useLocalStorage} from 'usehooks-ts'

import QueryRow from './QueryRow'

import schema from './schemas/schema'
import {QuerySegment} from './lib/types'
import {createQueryString} from './lib/createQueryString'
import {OPERATORS} from './lib/constants'

const {types}: {types: SchemaType[]} = schema._original
const documentTypes = types.filter((schemaType) => schemaType.type === 'document')

const createBlankSegment = () => ({_key: nanoid(), path: '', operator: '', value: '', type: ''})

function App() {
  const [query, setQuery] = useLocalStorage<QuerySegment[]>(`queryBuilder`, [])
  const [selectedType, setSelectedType] = useState(
    query.length ? documentTypes.find((type) => type.name === query[0].value) : documentTypes[0]
  )
  const currentType = useRef(query.length ? query[0]?.value : null)

  const handleTypeChange = useCallback((event) => {
    const findType = types.find((type) => type.name === event.target.value)

    if (findType) {
      setSelectedType(findType)
    }
  }, [])

  // Reset query if empty OR type changes between renders
  useEffect(() => {
    if (!query.length || (selectedType && currentType.current !== selectedType.name)) {
      setQuery([
        {
          _key: nanoid(),
          path: '_type',
          operator: OPERATORS[0].value,
          value: selectedType.name,
          type: `document`,
        },
        createBlankSegment(),
      ])
    }
  }, [selectedType])

  const handleAddNew = useCallback(() => {
    setQuery([...query, createBlankSegment()])
  }, [query])

  const handleUpdate = useCallback(
    (_key, updatedSegment) => {
      const updatedQuery = query.map((segment) => {
        if (segment._key === _key) {
          return {_key, ...updatedSegment}
        }

        return segment
      })

      setQuery(updatedQuery)
    },
    [query]
  )

  const handleDelete = useCallback(
    (_key) => {
      const updatedQuery = query.filter((segment) => segment._key !== _key)

      setQuery(updatedQuery)
    },
    [query]
  )

  return (
    <ThemeProvider theme={studioTheme}>
      <Container width={1}>
        <Card>
          <Stack padding={2} space={3}>
            <Text weight="semibold">GROQ Query Builder</Text>
            <Text size={1}>
              Select <code>_type</code>
            </Text>
            <Select
              radius={2}
              onChange={handleTypeChange}
              defaultValue={query.length ? query[0].value : undefined}
            >
              {documentTypes.map((type) => (
                <option key={type.name} value={type.name}>
                  {type.title}
                </option>
              ))}
            </Select>
          </Stack>

          <Stack space={3} padding={2}>
            {query
              .filter((segment) => segment.path !== '_type')
              .map((segment) => (
                <QueryRow
                  key={segment._key}
                  segment={segment}
                  fields={selectedType.fields}
                  handleUpdate={handleUpdate}
                  handleDelete={handleDelete}
                />
              ))}
          </Stack>

          <Box padding={2}>
            <Button
              style={{width: `100%`}}
              text="Add New Segment"
              tone="positive"
              icon={AddCircleIcon}
              onClick={handleAddNew}
            />
          </Box>

          <Box marginTop={4} padding={2}>
            <Card shadow={2} radius={2} padding={4}>
              <Code style={{lineHeight: 1.7}} size={1} language="typescript">
                {createQueryString(query)}
              </Code>
            </Card>
          </Box>
        </Card>
      </Container>
    </ThemeProvider>
  )
}

export default App
