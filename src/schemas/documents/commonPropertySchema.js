export default {
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
        source: 'address',
      },
    },
    {
      name: 'modTime',
      type: 'datetime',
      title: 'Modified Time',
    },
    {
      name: 'status',
      type: 'string',
      title: 'Status',
    },
    {
      name: 'description',
      type: 'text',
      title: 'Description',
      rows: 4,
    },
    {
      name: 'mainImage',
      type: 'mainImage',
      title: 'Main image',
    },
    {
      name: 'price',
      type: 'number',
      title: 'Price',
    },
    {
      name: 'priceView',
      type: 'string',
      title: 'Price View',
    },
    {
      name: 'pricePeriod',
      type: 'string',
      title: 'Price Period',
    },
    {
      name: 'priceDisplay',
      type: 'boolean',
      title: 'Price Display',
    },
    {
      name: 'address',
      type: 'string',
      title: 'Address',
    },
    {
      title: 'Suburb',
      name: 'addressSuburb',
      type: 'reference',
      to: [{type: 'suburb'}],
    },
    {
      name: 'addressDisplay',
      type: 'boolean',
      title: 'Address Display',
    },
    {
      title: 'addressGeopoint',
      name: 'addressGeopoint',
      type: 'geopoint',
    },
    {
      name: 'agents',
      title: 'Agents',
      type: 'array',
      of: [
        {
          title: 'Agent',
          name: 'agent',
          type: 'reference',
          to: [{type: 'agent'}],
        },
      ],
    },
    {
      name: 'features',
      type: 'propertyFeatures',
      title: 'Property Features',
    },
    {
      title: 'Floorplan',
      name: 'floorplan',
      type: 'array',
      of: [{type: 'url'}],
    },
    {
      title: 'Gallery',
      name: 'gallery',
      type: 'array',
      of: [{type: 'url'}],
    },
    {
      title: 'Video Link',
      name: 'videoLink',
      type: 'url',
    },
    {
      title: 'External Link 1',
      name: 'externalLink1',
      type: 'url',
    },
    {
      title: 'External Link 2',
      name: 'externalLink2',
      type: 'url',
    },
    {
      title: 'Inspection Times',
      name: 'inspectionTimes',
      type: 'array',
      of: [{type: 'string'}],
    },
  ],
}
