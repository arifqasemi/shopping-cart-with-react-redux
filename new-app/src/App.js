import Cart from './components/Cart/Cart';
import CartItem from './components/Cart/CartItem';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import { useSelector } from 'react-redux';

function App() {
  const cart = useSelector(state =>state.cart.openCart);

  return (
    <Layout>
     {cart && <Cart />}
      {/* {cart && <CartItem item={DUMMY_ITEM}/>} */}
      <Products />
    </Layout>
  );
}

export default App;
