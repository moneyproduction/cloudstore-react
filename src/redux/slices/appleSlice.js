import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import axios from "axios";

export const fetchAppleId = createAsyncThunk(
  "apple/fetchAppleStatus",
  async (params) => {
    const { sortBy, order, category, search, currentPage } = params;
    const { data } = await axios.get(
      `https://63a6d83759fd83b1bb390719.mockapi.io/items?page=${currentPage}&limit=8&${category}&sortBy=${sortBy}&order=${order}&${search}`
    );
    return data;
  }
);

const initialState = {
  items: [],
  status: "loading",
};

export const appleSlice = createSlice({
  name: "apple",
  initialState,
  reducers: {
    setItems(state, action) {
      state.items = action.payload;
    },
  },
  extraReducers: {
    [fetchAppleId.pending]: (state) => {
      state.status = "loading";
      state.items = [];
    },
    [fetchAppleId.fulfilled]: (state, action) => {
      state.items = action.payload;
      state.status = "success";
    },
    [fetchAppleId.rejected]: (state, action) => {
      state.status = "error";
      state.items = [];
    },
  },
});

export const selectAppleItems = (state) => state.apple;

export const { setItems } = appleSlice.actions;

export default appleSlice.reducer;
