import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../../Helper/axiosInstance";
import toast from "react-hot-toast";

const initialState = {
  ResearchData: [],
  SelfResearchData: [],
  status: 'idle', // Added for tracking the status
  error: null, // Added for tracking errors
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

export const getSelfResearchDetails = createAsyncThunk(
  "/products/self/getResearchDetails",
  async (_, thunkAPI) => {
    try {
      // Access the state using thunkAPI
      const state = thunkAPI.getState();

      // Assuming the ID is stored in state, adjust the path based on your state structure
      const id = state.auth.id || state.auth.data.id; // Replace with actual state path to the ID

      // If the ID is retrieved in some other way, adjust accordingly

      // Make the API call with the retrieved ID
      const product = axiosInstance.get(`/users/papers/${id}`);
      console.log("product aaaaaaaaa: ",product)
      toast.promise(product, {
        loading: "Loading the Research",
        error: "Something went wrong, cannot load post",
        success: "Your Research Posts loaded successfully",
      });
      return product;
      // const apiResponse = await product.data.data;
      // console.log("YahsrajDesale", apiResponse.payload.data.data);
      // return apiResponse;
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  }
);

export const deletePaper = createAsyncThunk("paper/delete", async (id) => {
  try {
    const response = axiosInstance.delete(`/paper/${id}`);

    toast.promise(response, {
      loading: "Deleting...",
      success: "Deleted successfully",
      error: "Ohh No!, something went wrong. Please try again",
    });

    return { id };
  } catch (error) {
    console.log(error);
  }
});

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
    }).addCase(getSelfResearchDetails.fulfilled, (state, action) => {
      console.log("Action Payload :", action.payload);
      state.SelfResearchData = action?.payload?.data?.data;
    }).addCase(deletePaper.fulfilled, (state, action) => {
      console.log("Action Payload:", action.payload);
      const deletedPaperId = action.payload.id; // Get the id of the deleted hackathon

      // Filter out the deleted hackathon from the state
      state.SelfResearchData = state.SelfResearchData.filter(paper => paper._id !== deletedPaperId);
    });
  },
});

export default ResearchSlice.reducer;
