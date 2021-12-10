export default {
  name: 'pageBuilder',
  type: 'array',
  title: 'Page Builder',
  options: {
    editModal: 'fullscreen',
  },
  of: [
    {
      name: 'header',
      type: 'header',
      title: 'Header',
    },
    {
      name: 'content',
      type: 'content',
      title: 'Content',
    },
    {
      name: 'columns',
      type: 'columns',
      title: 'Columns',
    },
    {
      name: 'columnsButtons',
      type: 'columnsButtons',
      title: 'Columns Buttons',
    },
    {
      name: 'properties',
      type: 'properties',
      title: 'Properties',
    },
    {
      name: 'blogs',
      type: 'blogs',
      title: 'Blogs',
    },
    {
      name: 'offices',
      type: 'offices',
      title: 'Offices',
    },
    {
      name: 'agents',
      type: 'agents',
      title: 'Agents',
    },
    {
      name: 'cta',
      type: 'cta',
      title: 'Call to Action',
    },
  ],
  preview: {
    select: {
      title: 'title',
      //   media: 'property.mainImage',
      subtitle: 'subtitle',
    },
  },
}
