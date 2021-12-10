export default {
  name: 'seo',
  title: 'SEO',
  type: 'object',
  options: {
    collapsible: true,
    collapsed: false,
  },
  fields: [
    {
      name: `title`,
      type: `string`,
      description: `Override the page title`,
    },
    {
      name: `keywords`,
      type: `string`,
      description: `Used for SEO analysis`,
    },
    {
      name: `synonyms`,
      type: `string`,
      description: `Used for SEO analysis`,
    },
    {
      name: `description`,
      type: `text`,
      rows: 3,
      validation: (Rule) => [
        Rule.max(180).warning('Description should be less than 180 characters'),
        Rule.min(120).warning('Description should be at least 120 characters'),
      ],
    },
    {
      name: `image`,
      type: `image`,
    },
  ],
}
