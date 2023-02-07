import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./redux/authSlice";
import itemReducer from './redux/ItemSlice';
import  RestruantById from "./redux/RestruantById";
import OrderHistorySlice from "./redux/OrderHistorySlice";
import OrderById from "./redux/OrderById";
import AddToCart from "./redux/AddToCartSlice";
import SignUpSlice from './redux/SignUpSlice'
const store = configureStore({
    reducer:{
      user: authSlice,
      items: itemReducer,
      restraunts: RestruantById,
      orderhistory: OrderHistorySlice,
      orderbyid: OrderById,
      cart:  AddToCart,
      users: SignUpSlice
     }
})

export default store;