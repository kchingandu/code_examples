export const createTypeOptionPrompt = {
  type: 'select',
  message: 'Create',
  name: 'selectedTemplateOption',
  choices: [
    {title: 'File', value: 'file'},
    {title: 'Folder', value: 'folder'},
  ],
  max: 1,
  hint: '- Space to select. Return to submit'
};