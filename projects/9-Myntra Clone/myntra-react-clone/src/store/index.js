import { createSlice } from "@reduxjs/toolkit"

const  itemSlice = {
  name:'items',
  initialState:{},
  reducers:{
    addInitialItems : (store,action) => {
      return store;
    }
  }
}