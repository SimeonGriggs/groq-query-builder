import {FiUsers} from 'react-icons/fi'

export default {
  name: 'agent',
  type: 'document',
  icon: FiUsers,
  title: 'Agent',
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
    {
      name: 'image',
      type: 'mainImage',
      title: 'Image',
    },
    {
      name: 'bio',
      type: 'text',
      title: 'Biography',
      rows: 4,
    },
    {
      name: 'position',
      type: 'string',
      title: 'Position',
    },
    {
      name: 'email',
      type: 'string',
      title: 'Email',
    },
    {
      name: 'phone',
      type: 'string',
      title: 'Phone',
    },
    {
      name: 'userId',
      type: 'string',
      title: 'User ID',
    },
    {type: 'seo'},
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'slug.current',
      media: 'image',
    },
  },
}
