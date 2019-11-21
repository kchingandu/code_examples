import { searchFilter } from './support/utils';

import {
  getCommandFolderConfig,
  getFlowFolderConfig,
  getMiddlewareFolderConfig,
  getPureComponentFolderConfig,
  getPureComponentReduxFolderConfig,
  getReducerFolderConfig
} from '../configurations/folder.config';

export const folderOptionPrompt = {
  name: 'templateFactory',
  suggest: searchFilter,
  message: 'Select a folder template to create',
  hint: '- filter list by typing or select an option using arrow keys',
  choices: [
    {
      title: 'Flow',
      value: getFlowFolderConfig
    },
    {
      title: 'Command',
      value: getCommandFolderConfig
    },
    {
      title: 'Reducer',
      value: getReducerFolderConfig
    },
    {
      title: 'Middleware',
      value: getMiddlewareFolderConfig
    },
    {
      title: 'Component',
      value: getPureComponentFolderConfig
    },
    {
      title: 'ComponentRedux',
      value: getPureComponentReduxFolderConfig
    },
  ],
  type: selectedTemplateOption => selectedTemplateOption === 'folder' ? 'autocomplete' : null
};
