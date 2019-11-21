import { filesExists } from './support/utils';

export const overwriteFilePrompt = {
  type: (prev, prevResponses) => filesExists(prevResponses) ? 'confirm' : null,
  name: 'canCreateFile',
  message: (prev, prevResponses) => `${filesExists(prevResponses)} file(s) already exist! overwrite?`,
  initial: true
};
