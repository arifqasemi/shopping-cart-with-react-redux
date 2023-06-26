import classes from './CartItem.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { quantityAction } from '../../store/index';
const CartItem = (props) => {
  const { title, quantity, total, price,id} = props.item;
  const dispatch = useDispatch();
  const increment =()=>{
    dispatch(quantityAction.addItemToCart({
      id,
      title,
      price,
    }));
  }
  const decrement =()=>{
    dispatch(quantityAction.removeItemFromCart(id));
  }
  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${total}{' '}
          <span className={classes.itemprice}>(${price}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={decrement}>-</button>
          <button onClick={increment}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
