// First, we must import the schema creator
// import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
// import schemaTypes from 'all:part:@sanity/base/schema-type'

import schema from '@sanity/schema'

import agent from './documents/agent'
import office from './documents/office'
import property from './documents/property'
import propertyType from './documents/propertyType'
import suburb from './documents/suburb'
import seo from './objects/seo'

export default schema.compile({
  // name: 'content',
  types: [agent, office, property, propertyType, suburb, seo],
})
