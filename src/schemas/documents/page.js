import {FiFile} from 'react-icons/fi'

export default {
  name: 'page',
  type: 'document',
  title: 'Pages',
  icon: FiFile,
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name',
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
    },
    {
      title: 'Parent Page',
      name: 'parentPage',
      type: 'reference',
      to: [{type: 'page'}],
    },
    {
      name: 'pageBuilder',
      type: 'pageBuilder',
      title: 'Page Builder',
    },
    {
      name: 'content',
      type: 'bodyPortableText',
      title: 'Content',
      description: 'DEPRECIATED: Use the SEO gorup of fields below',
    },
    {type: 'seo', title: 'SEO', name: 'seo'},
  ],
  preview: {
    select: {
      name: 'name',
      slug: 'slug',
      parentPage: 'parentPage.slug.current',
    },
    prepare({name, slug, parentPage = false}) {
      return {
        title: `${parentPage ? `⌞ ` : ``}${name}`,
        subtitle: `${parentPage ? `${parentPage}/${slug.current}` : slug.current}`,
      }
    },
  },
}
