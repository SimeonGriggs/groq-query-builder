import {FiImage} from 'react-icons/fi'

export default {
  name: 'mainImage',
  type: 'image',
  title: 'Image',
  icon: FiImage,
  options: {
    hotspot: true,
  },
  fields: [
    // {
    //   name: 'caption',
    //   type: 'string',
    //   title: 'Caption',
    //   options: {
    //     isHighlighted: true
    //   }
    // },
    {
      name: 'alt',
      type: 'string',
      title: 'Alternative text',
      description: 'Important for SEO and accessiblity.',
      // validation: Rule => Rule.error('You have to fill out the alternative text.').required(),
      options: {
        isHighlighted: true,
      },
    },
  ],
  preview: {
    select: {
      imageUrl: 'asset.url',
      title: 'caption',
    },
  },
}
