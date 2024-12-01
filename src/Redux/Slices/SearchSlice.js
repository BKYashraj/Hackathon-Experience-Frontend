import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../../Helper/axiosInstance";

const initialState = {
  searchData: [],
};

export const searchDetails = createAsyncThunk(
  "/search/getDetails",
  async (id) => {
    try {
      const product = axiosInstance.get(`/search/${id}`);
      const apiResponse = await product;
      console.log("API response    : ",apiResponse);
      return apiResponse.data;
    } catch (error) {
      console.log(error);
    }
  }
);

const SearchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(searchDetails.fulfilled, (state, action) => {
        console.log("Action new Payload for:", action.payload);
        state.searchData = action.payload?.data || [];
      })
  },
});

export default SearchSlice.reducer;
