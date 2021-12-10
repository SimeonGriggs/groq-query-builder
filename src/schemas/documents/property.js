import {FiShoppingBag} from 'react-icons/fi'
import commonPropertySchema from './commonPropertySchema.js'

export default {
  name: 'property',
  type: 'document',
  icon: FiShoppingBag,
  title: 'Property',
  fields: [
    // {
    //   name: 'propertyType',
    //   type: 'reference',
    //   title: 'Property Type',
    //   to: [{type: 'propertyType'}, {type: 'agent'}],
    // },
    ...commonPropertySchema.fields,
    // {
    //   name: 'example',
    //   title: 'Example',
    //   type: 'string',
    // },
    // {
    //   name: 'collection',
    //   title: 'Collection',
    //   type: 'array',
    //   of: [{name: 'title', type: 'string'}],
    // },
    // {
    //   name: 'exampleObject',
    //   title: 'Example Object',
    //   type: 'object',
    //   fields: [
    //     {
    //       name: 'exampleInner',
    //       title: 'Example Inner',
    //       type: 'string',
    //     },
    //   ],
    // },
    // {name: 'seo', type: 'seo'},
  ],
  preview: {
    select: {
      title: 'title',
      slug: 'slug',
      media: 'mainImage',
      status: 'status',
      priceView: 'priceView',
    },
    prepare({title = 'No title', status = '', priceView = '', media = false}) {
      return {
        title,
        media,
        subtitle: `${status.charAt(0).toUpperCase() + status.slice(1)} | ${priceView}`,
      }
    },
  },
}
