export default {
  name: 'agents',
  type: 'object',
  title: 'Agents',
  fields: [
    {
      name: 'agents',
      type: 'array',
      title: 'Agents',
      of: [
        {
          name: 'agent',
          type: 'reference',
          title: 'Agent',
          to: [{type: 'agent'}],
        },
      ],
    },
  ],
  preview: {
    // select: {},
    prepare(selection) {
      return {
        title: `Agents`,
      }
    },
  },
}
