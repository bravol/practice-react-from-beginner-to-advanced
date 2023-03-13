import { combineReducers, configureStore } from "@reduxjs/toolkit";
import countReducer from "./slice/counterSlice";
import authReducer from "./slice/authSlice";

const rootReducer = combineReducers({
  //reducers
  auth: authReducer,
  counter: countReducer,
});

// create a store
const store = configureStore({
  reducer: rootReducer,
});

export default store;
