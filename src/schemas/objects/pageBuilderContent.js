export default {
  name: 'content',
  type: 'object',
  title: 'Content',
  fields: [{name: 'content', type: 'bodyPortableText', title: 'Content'}],
  preview: {
    select: {
      content: 'content',
    },
    prepare({content}) {
      return {
        title: content ? content[0].children[0].text : 'Empty',
        subtitle: `Content`,
      }
    },
  },
}
