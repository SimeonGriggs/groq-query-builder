export default {
  name: 'result',
  type: 'object',
  title: 'Result',
  fields: [
    {name: 'operation', type: 'string', title: 'Operation'},
    {
      name: 'property',
      type: 'reference',
      title: 'Property',
      to: [{type: 'property'}],
      weak: true,
    },
  ],
  preview: {
    select: {
      title: 'operation',
      media: 'property.mainImage',
      subtitle: 'property.title',
    },
  },
}
