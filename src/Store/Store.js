import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import CartSlice from './CartSlice'


const cmdReducers = combineReducers({
    cart_item: CartSlice,
})
 const store =  configureStore({
     reducer: cmdReducers
})

export default store;
