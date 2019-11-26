import CheckoutPage from './pages/checkoutPage/CheckoutPage';
import ProductPage from './pages/productPage/ProductPage';

export const routes = [
  {
    path: '/checkout',
    name: 'Checkout page',
    component: CheckoutPage
  },
  {
    path: '/',
    name: 'Product page',
    component: ProductPage
  }
];