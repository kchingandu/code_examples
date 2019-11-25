import { camelCase, kebabCase, pascalCase } from '../templates/support/utils';
import templates from '../templates/templatesMap';

const {
  scss,
  flow,
  command,
  reducer,
  flowTest,
  middleware,
  actionTypes,
  commandTest,
  reducerTest,
  pureComponent,
  actionCreator,
  middlewareTest,
  pureComponentRedux,
  pureComponentReduxTest,
  pureComponentRenderTest,
  pureComponentReduxRenderTest,
} = templates;

export const getCommandFileConfig = (path, name) => {
  const _name = camelCase(name);

  return {pathAndName: `${path}/${_name}.js`, fileContent: command(name)}
};

export const getCommandTestFileConfig = (path, name) => {
  const _name = camelCase(name);

  return {pathAndName: `${path}/${_name}.test.js`, fileContent: commandTest(name)}
};

export const getFlowFileConfig = (path, name) => {
  const _name = camelCase(name);

  return {pathAndName: `${path}/${_name}Flow.js`, fileContent: flow(name)}
};

export const getFlowTestFileConfig = (path, name) => {
  const _name = camelCase(name);

  return {pathAndName: `${path}/${_name}Flow.test.js`, fileContent: flowTest(name)}
};

export const getMiddlewareFileConfig = (path, name) => {
  const _name = camelCase(name);

  return {pathAndName: `${path}/${_name}Middleware.js`, fileContent: middleware(name)}
};

export const getMiddlewareTestFileConfig = (path, name) => {
  const _name = camelCase(name);

  return {pathAndName: `${path}/${_name}Middleware.test.js`, fileContent: middlewareTest(name)}
};

export const getPureComponentFileConfig = (path, name) => {
  const _name = pascalCase(name);

  return {pathAndName: `${path}/${_name}.js`, fileContent: pureComponent(name)}
};

export const getPureComponentTestFileConfig = (path, name) => {
  const _name = camelCase(name);

  return {pathAndName: `${path}/${_name}.test.js`, fileContent: pureComponentRenderTest(name)}
};

export const getPureComponentReduxRenderTestFileConfig = (path, name) => {
  const _name = camelCase(name);

  return {pathAndName: `${path}/${_name}.test.js`, fileContent: pureComponentReduxRenderTest(name)}
};

export const getPureComponentSCSSFileConfig = (path, name) => {
  const _name = camelCase(name);

  return {pathAndName: `${path}/${kebabCase(_name)}.scss`, fileContent: scss(name)}
};

export const getPureComponentReduxFileConfig = (path, name) => {
  const _name = pascalCase(name);

  return {pathAndName: `${path}/${_name}.js`, fileContent: pureComponentRedux(name)}
};

export const getPureComponentReduxTestFileConfig = (path, name) => {
  const _name = camelCase(name);

  return {pathAndName: `${path}/${_name}.test.js`, fileContent: pureComponentReduxTest(name)}
};

export const getReducerFileConfig = (path, name) => {
  const _name = camelCase(name);

  return {pathAndName: `${path}/${_name}Reducer.js`, fileContent: reducer(name)}
};

export const getReducerTestFileConfig = (path, name) => {
  const _name = camelCase(name);

  return {pathAndName: `${path}/${_name}Reducer.test.js`, fileContent: reducerTest(name)}
};

export const getActionTypeFileConfig = (path) => {
  return {pathAndName: `${path}/actionTypes.js`, fileContent: actionTypes()}
};

export const getActionCreatorFileConfig = (path) => {
  return {pathAndName: `${path}/actionCreators.js`, fileContent: actionCreator()}
};
