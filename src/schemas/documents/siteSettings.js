import {FiSettings} from 'react-icons/fi'

export default {
  name: 'siteSettings',
  type: 'document',
  icon: FiSettings,
  title: 'Site Settings',
  __experimental_actions: ['update', /* 'create', 'delete', */ 'publish'],
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
    {
      title: 'Menu',
      name: 'menu',
      type: 'array',
      of: [
        {
          name: 'linkItem',
          title: 'Link Item',
          type: 'linkItem',
        },
      ],
    },
    {
      name: 'footerLeftTitle',
      title: 'Footer Left Title',
      type: 'string',
    },
    {
      name: 'footerLeftText',
      title: 'Footer Left Text',
      type: 'text',
    },
    {
      name: 'footerCenterTitle',
      title: 'Footer Center Title',
      type: 'string',
    },
    {
      name: 'footerRightTitle',
      title: 'Footer Right Title',
      type: 'string',
    },
    {
      name: 'footerRightText',
      title: 'Footer Right Text',
      type: 'text',
    },
    // {
    //   name: 'keywords',
    //   type: 'array',
    //   title: 'Keywords',
    //   of: [{type: 'string'}],
    //   options: {
    //     layout: 'tags'
    //   }
    // }
    // {
    //   name: 'agent',
    //   type: 'reference',
    //   description: 'Publish an author and set a reference to them here.',
    //   title: 'Agent',
    //   to: [{type: 'agent'}]
    // }
  ],
}
