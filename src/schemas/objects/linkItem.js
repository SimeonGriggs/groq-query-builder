export default {
  title: 'Link Item',
  name: 'linkItem',
  type: 'object',
  fields: [
    {
      title: 'Link Text',
      name: 'linkText',
      type: 'string',
    },
    {
      title: 'Link Path',
      name: 'linkPath',
      type: 'string',
      description: 'URL without the https://houseestateagents.com.au, should start with /',
    },
  ],
  preview: {
    select: {
      title: 'linkText',
      subtitle: 'linkPath',
    },
  },
}
