import { addFlow } from './flowMap';
import { ANY_ACTION_TYPE } from './flowConstants';

export const mapActionTypeToFlow = (...actionTypes) => (flow) => {
  const addFlowToMap = (actionType) => addFlow(actionType, flow);

  actionTypes.forEach(addFlowToMap);
};

export const createFlow = (commandList) => (store) => (action) => {
  const executeCommand = (command) => command({...store, action});

  commandList.forEach(executeCommand);
};

export const wrapCommandInActionTypeCheck = (...actionTypes) => (...commands) => ({dispatch, getState, action}) => {
  const isActionTypeOfInterest = actionTypes.includes(action.type) || actionTypes.includes(ANY_ACTION_TYPE);

  if (isActionTypeOfInterest) {
    const executeCommand = (command) => command({dispatch, getState, action});

    isActionTypeOfInterest && commands.forEach(executeCommand);
  }
};