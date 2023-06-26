import classes from './CartButton.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { cartAction } from '../../store';
const CartButton = (props) => {

  const cartAmount = useSelector(state => state.quantity.totalquantity);

  const dispatch = useDispatch();
  const cartHandler =()=>{
    dispatch(cartAction.open());
  }
  return (
    <button className={classes.button} onClick={cartHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{cartAmount}</span>
    </button>
  );
};

export default CartButton;
