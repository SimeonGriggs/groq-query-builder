export default {
  name: 'offices',
  type: 'object',
  title: 'Offices',
  fields: [{name: 'content', type: 'bodyPortableText', title: 'Content'}],
  preview: {
    // select: {},
    prepare(selection) {
      return {
        title: `Offices`,
      }
    },
  },
}
