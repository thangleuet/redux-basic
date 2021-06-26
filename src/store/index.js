import { configureStore } from '@reduxjs/toolkit';

import counterSlice from './CreateSlice/CounterSlice'
import AuthSlice from './CreateSlice/AuthSlice'


const store = configureStore({
  reducer: {counter: counterSlice.reducer , Auth : AuthSlice.reducer}
});

export const AuthAction = AuthSlice.actions;

export const counterAction = counterSlice.actions;

export default store;
/* const counterReducer = (state = initState , action) => {
    if (action.type === 'increment'){
        state.counter ++;
        return state
            
    }
    if (action.type === 'increase'){
            state.counter = state.counter + action.amount; //add payload
            return state
    }
    if (action.type === 'decrement'){
            state.counter = state.counter -1;
            return state;
    }
    if (action.type === 'toggle'){
            state.showCounter = !state.showCounter;
            return state;
        }
    return state;
}
 
const store = createStore(counterReducer); */


