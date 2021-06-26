import Counter from './components/Counter';
import Auth from './components/Auth'
import Header from './components/Header'
import UserProfile from './components/UserProfile'
import {useSelector} from 'react-redux'


function App() {

  const isAuth = useSelector(state => state.Auth.isAuth)

  return (
    <div>
      <Header/>
      {!isAuth && <Auth/>}
      {isAuth && <UserProfile/>}
      {isAuth && <Counter />}
    </div>
  );
}

export default App;
