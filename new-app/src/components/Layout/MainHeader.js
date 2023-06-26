import CartButton from '../Cart/CartButton';
import classes from './MainHeader.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { cartAction } from '../../store';
const MainHeader = (props) => {
  const cart = useSelector(state =>state.openCart);
 
  return (
    <header className={classes.header}>
      <h1>ReduxCart</h1>
      <nav>
        <ul>
         <li>
            <CartButton/>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
