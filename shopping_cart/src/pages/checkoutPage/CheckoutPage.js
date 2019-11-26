import React, { PureComponent } from 'react';
import ProductList from '../../components/productList/ProductList';
import { connect as reduxConnect } from 'react-redux';
import * as actions from '../../actions/actions';
import { selectBasketItems } from '../../selector/selector';
import { Link } from 'react-router-dom';

class CheckoutPage extends PureComponent {
  render = () => {
    const {products} = this.props;

    return (
      <div className="page checkout">
        <h1>Checkout Page</h1>
        <br/>
        {products.length ?
          <ProductList
            products={products}
            buttonText={'Remove from basket'}
            onItemSelect={this.props.removeItemFromBasket}
          />
          :
          <div className="no-product">
            Looks like you there's nothing to checkout
            <br/>
            Head over to the &nbsp;
            <Link to='/'>Product page</Link>
            &nbsp; and select something...
          </div>
        }
      </div>)
  };
}

const mapStateToProps = (state) => ({
  products: selectBasketItems(state)
});

export const connect = (connect = reduxConnect) => {
  return connect(mapStateToProps, actions)(CheckoutPage);
};

export default connect();