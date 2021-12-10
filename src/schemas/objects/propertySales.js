export default {
  name: 'propertySales',
  type: 'object',
  fields: [
    {name: `date`, type: `date`},
    {name: `price`, type: `number`},
    {name: `priceRangeMaximum`, type: `number`},
    {name: `priceRangeMinimum`, type: `number`},
    {name: `confidence`, type: `string`},
  ],
}
