import {FiMapPin} from 'react-icons/fi'

export default {
  name: 'suburb',
  type: 'document',
  title: 'Suburb',
  hidden: true,
  icon: FiMapPin,
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
