export default {
  name: 'columnsButtons',
  type: 'object',
  title: 'Columns Buttons',
  fields: [
    {name: 'leftButtonText', type: 'string', title: 'Left Button Text'},
    {name: 'leftButtonLink', type: 'url', title: 'Left Button Link'},
    {name: 'rightButtonText', type: 'string', title: 'Right Button Text'},
    {name: 'rightButtonLink', type: 'url', title: 'Right Button Link'},
  ],
  preview: {
    select: {
      leftButtonText: 'leftButtonText',
      rightButtonText: 'rightButtonText',
    },
    prepare(selection) {
      const {leftButtonText, rightButtonText} = selection

      return {
        title: `${leftButtonText} / ${rightButtonText}`,
        subtitle: `Columns Buttons`,
      }
    },
  },
}
