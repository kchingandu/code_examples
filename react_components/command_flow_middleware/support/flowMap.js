import { STUB_FLOW } from './flowConstants';

export const flowMap = {
  [STUB_FLOW]: () => () => {
  }
};

export const addFlow = (action, flow) => void (flowMap[action] = flow);