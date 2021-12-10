import {FiMap} from 'react-icons/fi'

export default {
  name: 'propertyType',
  type: 'document',
  title: 'Property Type',
  icon: FiMap,
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name',
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
    },
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'slug.current',
    },
  },
}
