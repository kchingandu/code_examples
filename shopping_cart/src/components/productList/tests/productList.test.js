import { connect, ProductList } from '../ProductList';

describe('ProductList.redux', () => {
  let mockConnect;
  let mapStateToProps;
  let componentWrapper;
  let mapDispatchToProps;

  beforeEach(() => {
    mockConnect = jest.fn();
    componentWrapper = jest.fn();
    mockConnect.mockReturnValue(componentWrapper);

    connect(mockConnect);

    mapStateToProps = mockConnect.mock.calls[0][0];
    mapDispatchToProps = mockConnect.mock.calls[0][1];
  });

  it('should call the redux connect function with the correct parameters', () => {
    const mockConnect = jest.fn();
    const componentWrapper = jest.fn();
    mockConnect.mockReturnValue(componentWrapper);

    connect(mockConnect);

    expect(mockConnect).toBeCalledWith(expect.any(Function), expect.any(Function));
    expect(componentWrapper).toBeCalledWith(ProductList);
  });

  it('should set the data from state to props', () => {
    const stateStub = {
       
    };

    // expect(mapStateToProps(stateStub).).toEqual();
  });

  it('should dispatch action', () => {
    const dispatchSpy = jest.fn();

    const props = mapDispatchToProps(dispatchSpy);

    // props.();

    // expect(dispatchSpy).toHaveBeenCalledWith({type: '', payload:});
  });
});
