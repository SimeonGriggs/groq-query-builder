export default {
  name: 'columns',
  type: 'object',
  title: 'Columns',
  fields: [
    {name: 'contentLeft', type: 'bodyPortableText', title: 'Left'},
    {name: 'showTestimonials', type: 'boolean', title: 'Show Testimonials'},
    {name: 'contentRight', type: 'bodyPortableText', title: 'Right'},
    {name: 'showForm', type: 'boolean', title: 'Show Contact Form'},
  ],
  preview: {
    // select: {},
    prepare(selection) {
      return {
        title: `Columns`,
      }
    },
  },
}
