import { searchFilter } from './support/utils';
import {
  getActionCreatorFileConfig,
  getCommandTestFileConfig,
  getFlowFileConfig,
  getFlowTestFileConfig,
  getMiddlewareFileConfig,
  getMiddlewareTestFileConfig,
  getPureComponentFileConfig,
  getPureComponentReduxFileConfig,
  getPureComponentReduxTestFileConfig,
  getPureComponentSCSSFileConfig,
  getPureComponentTestFileConfig,
  getReducerFileConfig
} from '../configurations/file.config';

const createFactory = (fileConfig) => (path, name) => [fileConfig(path, name)];

export const fileOptionPrompt = {
  limit: 20,
  name: 'templateFactory',
  suggest: searchFilter,
  message: 'Select a file template',
  hint: '- filter list by typing or select an option using arrow keys',
  choices: [
    {
      title: 'flow',
      value: createFactory(getFlowFileConfig)
    },
    {
      title: 'command',
      value: createFactory(getFlowFileConfig)
    },
    {
      title: 'reducer',
      value: createFactory(getReducerFileConfig)
    },
    {
      title: 'flow test',
      value: createFactory(getFlowTestFileConfig)
    },
    {
      title: 'middleware',
      value: createFactory(getMiddlewareFileConfig)
    },
    {
      title: 'command test',
      value: createFactory(getCommandTestFileConfig)
    },
    {
      title: 'pure component.js',
      value: createFactory(getPureComponentFileConfig)
    },
    {
      title: 'action creator.js',
      value: createFactory(getActionCreatorFileConfig)
    },
    {
      title: 'middleware.test.js',
      value: createFactory(getMiddlewareTestFileConfig)
    },
    {
      title: 'action type',
      value: createFactory(getActionCreatorFileConfig)
    },
    {
      title: 'component render',
      value: createFactory(getPureComponentTestFileConfig)
    },
    {
      title: 'component scss',
      value: createFactory(getPureComponentSCSSFileConfig)
    },
    {
      title: 'redux component',
      value: createFactory(getPureComponentReduxFileConfig)
    },
    {
      title: 'redux component test',
      value: createFactory(getPureComponentReduxTestFileConfig)
    },
    {
      title: 'reducer test',
      value: createFactory(getPureComponentReduxTestFileConfig)
    },
  ],
  type: selectedTemplateOption => selectedTemplateOption === 'file' ? 'autocomplete' : null
};
