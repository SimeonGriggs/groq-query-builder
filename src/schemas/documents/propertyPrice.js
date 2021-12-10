import {FiDollarSign} from 'react-icons/fi'

export default {
  name: 'propertyPrice',
  type: 'document',
  title: 'Property Price',
  icon: FiDollarSign,
  fields: [
    {name: 'title', type: 'string'},
    {name: 'image', type: 'image'},
    {name: 'location', type: 'geopoint'},
    {
      name: 'address',
      type: 'propertyAddress',
    },
    {
      name: 'landDetails',
      type: 'propertyLandDetails',
    },
    {
      name: 'features',
      type: 'propertyFeatures',
    },
    {
      name: 'salesAVM',
      type: 'propertySales',
    },
  ],
  preview: {
    select: {
      title: 'title',
      _id: '_id',
      media: 'image',
    },
    prepare({title, _id, media}) {
      return {
        title,
        subtitle: `/property-price/${_id.split('-').pop()}`,
        media,
      }
    },
  },
}
