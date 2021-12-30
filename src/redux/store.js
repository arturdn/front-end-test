import { configureStore } from "@reduxjs/toolkit";
import cartCounterReducer from "./features/cartCounter/cartCounterSlice";

export default configureStore({
  reducer: {
    cartReducer: cartCounterReducer,
  },
});
