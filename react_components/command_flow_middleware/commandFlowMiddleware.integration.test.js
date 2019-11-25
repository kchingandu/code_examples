import { createFlow, mapActionTypeToFlow, wrapCommandInActionTypeCheck } from './support/flowUtilities';
import { commandFlowMiddleware } from './index';

describe('commandFlowMiddleware', () => {
  let store;

  let dispatch;

  const next = () => {
  };

  beforeEach(() => {
    dispatch = jest.fn((action) => {
      commandFlowMiddleware(store)(next)(action);
    });

    store = {dispatch};
  });

  it('should demonstrate executing a  sequence of commands in a flow where one command triggers the next', () => {
    mapActionTypeToFlow('RETRIEVE SORT AND SAVE DATA FLOW')(createFlow([
      wrapCommandInActionTypeCheck('RETRIEVE DATA')(retrieveMixDataCommand),
      wrapCommandInActionTypeCheck('DATA RETRIEVED')(filterAndSaveDataCommand),
    ]));

    dispatch({type: 'RETRIEVE SORT AND SAVE DATA FLOW'});

    dispatch({type: 'RETRIEVE DATA'});

    expect(dispatch).toHaveBeenCalledWith({type: 'DATA RETRIEVED', payload: [null, 3, '', undefined, 2, 1]});

    expect(dispatch).toHaveBeenCalledWith({type: 'UPDATE STORE', payload: [1, 2, 3]});
  });

  it('should demonstrate two or more action types triggering a single command ', () => {
    const command = jest.fn();

    mapActionTypeToFlow('TWO ACTION ONE COMMAND FLOW')(createFlow([
      wrapCommandInActionTypeCheck('ACTION 1', 'ACTION 2')(command)
    ]));

    dispatch({type: 'TWO ACTION ONE COMMAND FLOW'});

    expect(command).not.toHaveBeenCalled();

    dispatch({type: 'ACTION 1'});

    dispatch({type: 'ACTION 2'});

    expect(command).toHaveBeenCalledTimes(2);
  });

  it('should demonstrate removing a flow', () => {
    const command = jest.fn();

    mapActionTypeToFlow('EXAMPLE FLOW')(createFlow([
      wrapCommandInActionTypeCheck('ACTION 1')(command)
    ]));

    dispatch({type: 'EXAMPLE FLOW'});

    dispatch({type: 'ACTION 1'});

    dispatch({type: 'REMOVE FLOW'});

    dispatch({type: 'ACTION 1'});

    expect(command).toHaveBeenCalledTimes(1);
  });

  it('should demonstrate two or more commands triggered by a single action ', () => {
    const command_1 = jest.fn();

    const command_2 = jest.fn();

    mapActionTypeToFlow('SINGLE ACTION TWO COMMANDS FLOW')(createFlow([
      wrapCommandInActionTypeCheck('ACTION 1')(command_1, command_2)
    ]));

    dispatch({type: 'SINGLE ACTION TWO COMMANDS FLOW'});

    dispatch({type: 'ACTION 1'});

    expect(command_1).toHaveBeenCalled();

    expect(command_2).toHaveBeenCalled();
  });

  const retrieveMixDataCommand = ({dispatch}) => {
    dispatch({type: 'DATA RETRIEVED', payload: [null, 3, '', undefined, 2, 1]});
  };

  const filterAndSaveDataCommand = ({action, dispatch}) => {
    const filteredData = action.payload.filter(value => !!value).sort();

    dispatch({type: 'UPDATE STORE', payload: filteredData});
  };
});