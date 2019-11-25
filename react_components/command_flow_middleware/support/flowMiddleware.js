import { flowMap } from './flowMap';
import { REMOVE_FLOW, STUB_FLOW } from './flowConstants';

let currentFlow = flowMap[STUB_FLOW];

const flowMiddleware = (store) => (next) => (action) => {
  next(action);

  setCurrentFlowAssignment(action.type);

  currentFlow(store)(action);
};

const setCurrentFlowAssignment = (type) => {
  if (type in flowMap) {
    currentFlow = flowMap[type];
  } else if (type === REMOVE_FLOW) {
    currentFlow = flowMap[STUB_FLOW];
  }
};

export default flowMiddleware;