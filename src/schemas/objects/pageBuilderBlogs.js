export default {
  name: 'blogs',
  type: 'object',
  title: 'Blogs',
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
      to: [{type: 'post'}],
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
        subtitle: `Blogs`,
      }
    },
  },
}
