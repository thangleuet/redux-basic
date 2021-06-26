import classes from './Counter.module.css';
import { useSelector , useDispatch } from 'react-redux';
import { counterAction } from '../store/index';

const Counter = () => {

  const counter = useSelector(state => state.counter)
  const show = useSelector(state => state.showCounter)
  const dispatch = useDispatch();

  const incrementHandler = () => {
    dispatch(counterAction.increment())
  }
  const decrementHandler = () => {
    dispatch(counterAction.decrement())
  }
  const increaseHandler = () => {
    dispatch(counterAction.increase(10))
  }

  const toggleCounterHandler = () => {
    dispatch(counterAction.toggle())
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick = {incrementHandler} >Increment</button>
        <button onClick = {decrementHandler} >Decrement</button>
        <button onClick = {increaseHandler} >Increase 10</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
