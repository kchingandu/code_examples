import {
  getActionCreatorFileConfig,
  getActionTypeFileConfig,
  getCommandFileConfig,
  getCommandTestFileConfig,
  getFlowFileConfig,
  getFlowTestFileConfig,
  getMiddlewareFileConfig,
  getMiddlewareTestFileConfig,
  getPureComponentFileConfig,
  getPureComponentReduxFileConfig,
  getPureComponentReduxRenderTestFileConfig,
  getPureComponentReduxTestFileConfig,
  getPureComponentSCSSFileConfig,
  getPureComponentTestFileConfig,
  getReducerFileConfig,
  getReducerTestFileConfig
} from './file.config';

import { camelCase } from '../templates/support/utils';

export const getCommandFolderConfig = (path, name) => {
  name = name.replace(/command$/gi, '');

  const _path = `${path}/${camelCase(name)}`;

  return [
    getCommandFileConfig(_path, name),
    getCommandTestFileConfig(_path, name),
  ]
};

export const getFlowFolderConfig = (path, name) => {
  name = name.replace(/flow$/gi, '');

  const _path = `${path}/${camelCase(name)}`;

  return [
    getFlowFileConfig(_path, name),
    getFlowTestFileConfig(_path, name),
    getActionTypeFileConfig(_path, name),
    getActionCreatorFileConfig(_path, name),
  ]
};

export const getMiddlewareFolderConfig = (path, name) => {
  name = name.replace(/middleware$/gi, '');

  const _path = `${path}/${camelCase(name)}`;

  return [
    getMiddlewareFileConfig(_path, name),
    getMiddlewareTestFileConfig(_path, name),
  ]
};

export const getPureComponentFolderConfig = (path, name) => {
  const _path = `${path}/${camelCase(name)}`;

  return [
    getPureComponentFileConfig(_path, name),
    getPureComponentTestFileConfig(_path, name),
    getPureComponentSCSSFileConfig(_path, name),
  ]
};

export const getPureComponentReduxFolderConfig = (path, name) => {
  const _path = `${path}/${camelCase(name)}}`;

  return [
    getPureComponentReduxFileConfig(_path, name),
    getPureComponentSCSSFileConfig(_path, name),
    getPureComponentReduxTestFileConfig(`${_path}/tests`, name),
    getPureComponentReduxRenderTestFileConfig(`${_path}/tests`, name),
  ]
};

export const getReducerFolderConfig = (path, name) => {
  name = name.replace(/reducer$/gi, '');

  const _path = `${path}/${camelCase(name)}`;

  return [
    getReducerFileConfig(_path, name),
    getReducerTestFileConfig(`${_path}/tests`, name),
  ]
};
