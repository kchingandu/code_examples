export const instanceNamePrompt = {
  type: 'text',
  name: 'instanceName',
  message: (prev, {selectedTemplateOption}) => `Name of ${selectedTemplateOption}`,
  validate: value => value ? true : 'Enter a valid name to continue'
};