import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../../Helper/axiosInstance";
import toast from "react-hot-toast";

const initialState = {
  hackathonsData: [],
};

export const getAllPosts = createAsyncThunk('/products/getAll', async () => {
  try {
    const products = await axiosInstance.get('/hackathon');
    toast.success('Posts loaded successfully');
    return products.data;
  } catch (error) {
    console.log(error);
    toast.error('Something went wrong');
  }
});

export const addPost = createAsyncThunk("hackathon/addpost", async (data) => {
  try {
    const response = axiosInstance.post("/hackathon", data);

    toast.promise(response, {
      loading: "Adding your hackathon experience...",
      success: "Hackathon experience added successfully!",
      error: "Oops! Something went wrong while adding your experience. Please try again.",
    });

    const apiResponse = await response;
    console.log("My response", apiResponse);
    return apiResponse;
  } catch (error) {
    console.log(error);
  }
});

export const getHackDetails = createAsyncThunk('/products/getDetails', async (id) => {
  try {
      const product = axiosInstance.get(`/hackathon/${id}`);
      toast.promise(product, {
          loading: 'Loading the Post',
          error: 'Something went cannot load post',
          success: 'Post loaded successfully',
      });
      const apiResponse = await product;
      console.log(apiResponse);
      return apiResponse;
  } catch(error) {
      console.log(error);
      toast.error('Something went wrong');
  }
});

const HackathonSlice = createSlice({
  name: "hackathons",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllPosts.fulfilled, (state, action) => {
        console.log('Action Payload:', action.payload); 
        state.hackathonsData = action?.payload?.data;
    });
  },
});

export default HackathonSlice.reducer;
