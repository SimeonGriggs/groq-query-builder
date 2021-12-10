import {FiFlag} from 'react-icons/fi'

export default {
  name: 'office',
  type: 'document',
  icon: FiFlag,
  title: 'Office',
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
      name: 'openHours',
      type: 'text',
      title: 'Open Hours',
      rows: 4,
    },
    {
      name: 'address',
      type: 'text',
      title: 'Address',
      rows: 2,
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
      name: 'agents',
      type: 'array',
      title: 'Agents',
      of: [
        {
          name: 'agent',
          type: 'reference',
          title: 'Agent',
          to: [{type: 'agent'}],
        },
      ],
    },
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'slug.current',
      media: 'image',
    },
  },
}
