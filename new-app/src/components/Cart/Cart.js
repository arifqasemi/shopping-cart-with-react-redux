import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';
import { useDispatch, useSelector } from 'react-redux';
const Cart = (props) => {
  const productsInCart = useSelector(state =>state.quantity.items);
  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {Array.isArray(productsInCart) && productsInCart.length > 0 ? (
          productsInCart.map(product => (
            <CartItem
              key={product.id}
              item={{
                title: product.name,
                quantity: product.quantity,
                total: product.totalprice,
                price: product.price,
                id: product.id
              }}
            />
          ))
        ) : (
          <p>No products in the cart.</p>
        )}
      </ul>
    </Card>
  );
};

export default Cart;
