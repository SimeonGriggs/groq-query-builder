export default {
  name: 'cta',
  type: 'object',
  title: 'Call to Action',
  fields: [{name: 'content', type: 'bodyPortableText', title: 'Content'}],
  preview: {
    // select: {},
    prepare(selection) {
      return {
        title: `Call to Action`,
      }
    },
  },
}
