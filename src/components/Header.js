import classes from './Header.module.css';
import { useSelector , useDispatch} from 'react-redux';
import { AuthAction } from '../store';

const Header = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector(state => state.Auth.isAuth)
  const LogoutHandler = () => {
    dispatch(AuthAction.logout())
  }
  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      {isAuth && <nav>
        <ul>
          <li>
            <a href='/'>My Products</a>
          </li>
          <li>
            <a href='/'>My Sales</a>
          </li>
          <li>
            <button onClick = {LogoutHandler} >Logout</button>
          </li>
        </ul>
      </nav>}
    </header>
  );
};

export default Header;
