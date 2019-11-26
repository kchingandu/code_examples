import React, { PureComponent } from 'react';
import ProductList from '../../components/productList/ProductList';
import { connect as reduxConnect } from 'react-redux';
import * as actions from '../../actions/actions';

class ProductPage extends PureComponent {
  render = () => {
    return (
      <div className="page">
        <h1>Product Page</h1>
        <br/>
        <ProductList
          buttonText={'Add to Basket'}
          products={this.props.products}
          onItemSelect={this.props.addItemToBasket}
        />
      </div>)
  };
};

const mapStateToProps = (state) => ({
  products: state.products,
});

export const connect = (connect = reduxConnect) => {
  return connect(mapStateToProps, actions)(ProductPage);
};

export default connect();