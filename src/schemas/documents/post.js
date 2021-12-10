import {FiFeather} from 'react-icons/fi'
import {format, formatRelative, subDays} from 'date-fns'

export default {
  name: 'post',
  type: 'document',
  title: 'Posts',
  icon: FiFeather,
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'thumbnail',
      type: 'image',
      title: 'Thumbnail',
    },
    {
      name: 'publishedAt',
      type: 'datetime',
      title: 'Published',
    },
    {
      name: 'body',
      type: 'bodyPortableText',
      title: 'Body',
    },
    {
      name: 'bodyHtml',
      type: 'text',
      title: 'bodyHtml',
    },
    {
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [
        {
          title: 'Category',
          name: 'category',
          type: 'reference',
          to: [{type: 'category'}],
        },
      ],
    },
    {
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [
        {
          name: 'tag',
          title: 'Tag',
          type: 'reference',
          to: [{type: 'tag'}],
        },
      ],
    },
    {
      name: 'author',
      type: 'reference',
      title: 'Author',
      to: [{type: 'agent'}],
    },
  ],
  preview: {
    select: {
      title: 'title',
      slug: 'slug',
      media: 'thumbnail',
      categories: 'categories',
      publishedAt: 'publishedAt',
    },
    prepare({title = 'No title', media = false, categories = [], publishedAt}) {
      return {
        title,
        media,
        subtitle: `${
          categories.length > 0 ? categories[0]._ref.replace('category-', '') : ''
        } | ${formatRelative(new Date(publishedAt), new Date())}`,
      }
    },
  },
}
