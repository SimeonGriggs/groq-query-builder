export default {
  name: 'galleryImages',
  type: 'object',
  title: 'Gallery',
  description: 'Drag-and-drop to upload multiple images',
  fields: [
    {
      type: 'array',
      name: 'images',
      title: 'Images',
      of: [
        {
          type: 'image',
          options: {
            hotspot: true,
          },
        },
      ],
      options: {
        layout: 'grid',
      },
    },
  ],
}
