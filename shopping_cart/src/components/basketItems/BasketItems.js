import  { PureComponent } from 'react';
import { connect as reduxConnect } from 'react-redux';
import { selectBasketItems } from '../../selector/selector';

export class BasketItems extends PureComponent {
  render = () => {
    return this.props.children(this.props.productCount);
  }
}

const mapStateToProps = (state) => ({
  productCount: selectBasketItems(state).length
});

export const connect = (connect = reduxConnect) => connect(mapStateToProps)(BasketItems);

export default connect()