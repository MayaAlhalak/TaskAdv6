import { configureStore } from "@reduxjs/toolkit";
import articalReducer from './../Slice/index'


const store = configureStore({
reducer :{articles : articalReducer} 
})

export default store;