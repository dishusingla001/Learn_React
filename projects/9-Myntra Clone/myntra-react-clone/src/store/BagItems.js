import { createSlice } from "@reduxjs/toolkit";

const BagSlice = createSlice({
  name: "bag",
  initialState: [],
  reducers: {
    addtoBag: (state, action) => {
      return [...state, action.payload];
    },
    removefromBag: (state, action) => {
      return state.filter((itemId) => itemId !== action.payload);
    },
  },
});

export const BagActions = BagSlice.actions;
export default BagSlice;
