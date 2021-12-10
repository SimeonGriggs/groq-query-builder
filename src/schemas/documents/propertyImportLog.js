import {FiLayers} from 'react-icons/fi'
import {format, formatRelative, subDays} from 'date-fns'

export default {
  name: 'propertyImportLog',
  type: 'document',
  title: 'Property Import Log',
  icon: FiLayers,
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
    },
    {
      name: 'importTime',
      type: 'datetime',
      title: 'Import Time',
    },
    {
      name: 'results',
      type: 'array',
      title: 'Results',
      of: [
        {
          name: 'result',
          type: 'result',
          title: 'Result',
        },
      ],
    },
    {
      name: 'details',
      type: 'text',
      title: 'Details',
      rows: 4,
    },
  ],
  preview: {
    select: {
      title: 'title',
      importTime: 'importTime',
    },
    prepare({title = 'No title', importTime = ''}) {
      return {
        title,
        media: false,
        subtitle: formatRelative(new Date(importTime), new Date()),
      }
    },
  },
}
