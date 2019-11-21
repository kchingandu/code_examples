import { createFolderPathFromSet, searchFilter } from './support/utils';

export const pathOptionPrompt = (setOfFolders) => ({
  name: 'path',
  type: 'autocomplete',
  suggest: searchFilter,
  message: 'Select folder...',
  choices: createFolderPathFromSet(setOfFolders)
});