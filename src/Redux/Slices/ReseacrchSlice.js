import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../../Helper/axiosInstance";
import toast from "react-hot-toast";

const initialState = {
  ResearchData: [],
  SelfResearchData: [],
};

export const addPost2 = createAsyncThunk("research/addpost", async (data) => {
  let toastId;
  try {
    // Display loading toast and store the ID
    toastId = toast.loading("Adding your Research experience...");

    // Make the API request
    const response = await axiosInstance.post("/paper", data);

    // Dismiss the loading toast
    toast.dismiss(toastId);

    // Show success toast
    toast.success("Research experience added successfully!");

    // Return the actual response data for Redux to store
    return response.data;
  } catch (error) {
    // Dismiss the loading toast if there's an error
    toast.dismiss(toastId);

    // Show error toast
    toast.error(
      "Oops! Something went wrong while adding your experience. Please try again."
    );

    // Log the error and throw it for createAsyncThunk to catch
    console.log("Error in API call:", error);
    throw error; // Ensure error is thrown to be handled by Redux
  }
});

export const getAllResearch = createAsyncThunk("/products/getAll", async () => {
  try {
    const products = await axiosInstance.get("/paper");
    console.log("New Product detyails",products);
    toast.success("Posts loaded successfully");
    return products;
  } catch (error) {
    console.log(error);
    toast.error("Something went wrong");
  }
});

export const getresearchDetails = createAsyncThunk(
  "/products/getDetails",
  async (id) => {
    try {
      const product = axiosInstance.get(`/paper/${id}`);
      toast.promise(product, {
        loading: "Loading the Post",
        error: "Something went cannot load post",
        success: "Post loaded successfully",
      });
      const apiResponse = await product;
      console.log(apiResponse);
      return apiResponse;
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  }
);

const ResearchSlice = createSlice({
  name: "research",
  initialState,
  reducers: {
    // You can add reducers here if needed
  },
  extraReducers: (builder) => {
    builder
    .addCase(getAllResearch.fulfilled, (state, action) => {
      console.log("Action Payload for:", action.payload);
      state.ResearchData = action?.payload?.data?.data;
    })
  },
});

export default ResearchSlice.reducer;
