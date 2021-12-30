import { createSlice } from "@reduxjs/toolkit";

export const cartCounterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 0,
  },
  reducers: {
    increment: (state, action) => {
      state.value += action?.payload?.count || 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
  },
});

export const { increment, decrement } = cartCounterSlice.actions;

export default cartCounterSlice.reducer;
