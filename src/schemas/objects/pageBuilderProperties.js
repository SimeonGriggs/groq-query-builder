export default {
  name: 'properties',
  type: 'object',
  title: 'Properties',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
    },
    {
      name: 'background',
      type: 'string',
      title: 'Background',
      options: {
        list: ['White', 'Blue'],
      },
    },
    {
      name: 'type',
      type: 'reference',
      title: 'Type',
      to: [{type: 'propertyType'}],
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'current',
      type: 'boolean',
      title: 'Current',
      description: 'Show available or sold/leased properties of this type',
    },
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare(selection) {
      const {title} = selection

      return {
        title,
        subtitle: `Properties`,
      }
    },
  },
}
