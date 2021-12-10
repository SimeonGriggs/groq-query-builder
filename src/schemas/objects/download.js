import {FiDownload} from 'react-icons/fi'

export default {
  name: 'download',
  title: 'Download',
  type: 'object',
  icon: FiDownload,
  fields: [
    {name: 'file', type: 'file'},
    {name: 'text', type: 'string'},
  ],
  preview: {
    select: {
      title: 'text',
      subtitle: 'file.asset.originalFilename',
    },
    prepare(selection) {
      const {title, subtitle} = selection
      return {
        title,
        subtitle,
        media: FiDownload,
      }
    },
  },
}
