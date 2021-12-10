export default {
  name: 'header',
  type: 'object',
  title: 'Header',
  fields: [
    {name: 'title', type: 'string', title: 'Title'},
    {name: 'subtitle', type: 'string', title: 'Subtitle'},
    {name: 'buttonText', type: 'string', title: 'Button Text'},
    {name: 'buttonLink', type: 'string', title: 'Button Link'},
    {name: 'images', type: 'galleryImages', title: 'Images'},
  ],
  preview: {
    select: {
      title: 'title',
      images: 'images',
    },
    prepare({title, images}) {
      return {
        title,
        subtitle: `Header`,
        media: images.images[0],
      }
    },
  },
}
