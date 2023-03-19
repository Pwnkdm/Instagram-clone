import { configureStore } from "@reduxjs/toolkit";
import { UserReducer } from "./Reducers/User";

const store = configureStore({
  reducer: {
    User: UserReducer,
  },
});

export default store;
