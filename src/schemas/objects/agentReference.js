export default {
  name: 'agentReference',
  type: 'object',
  title: 'Agent reference',
  fields: [
    {
      name: 'agent',
      type: 'reference',
      to: [
        {
          type: 'agent',
        },
      ],
    },
  ],
  preview: {
    select: {
      title: 'agent.name',
    },
  },
}
