import React, { Component } from 'react';
import { routes } from './routes';
import './App.css';
import { NavLink, Route, Switch } from 'react-router-dom';
import BasketItems from './components/basketItems/BasketItems';

const createRoutes = () => routes.map((route, key) => <Route key={key}{...route}/>);

class App extends Component {
  render() {
    return (
      <div className="App">
        <nav>
          <NavLink to={'/'}>Products</NavLink>
          <NavLink to={'/checkout'}>Checkout</NavLink>
          <BasketItems>{
            productCount => <span className='product-count'>{productCount}</span>
          }
          </BasketItems>
        </nav>
        <Switch>
          {createRoutes()}
        </Switch>
      </div>
    );
  }
}

export default App;
