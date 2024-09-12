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



const ResearchSlice = createSlice({
  name: "research",
  initialState,
  reducers: {
    // You can add reducers here if needed
  },
  extraReducers: (builder) => {
    builder
      .addCase(addPost2.pending, (state) => {
        state.status = 'loading'; // Set status to loading
        state.error = null; // Clear previous errors
      })
      .addCase(addPost2.fulfilled, (state, action) => {
        state.status = 'succeeded'; // Set status to succeeded
        state.ResearchData.push(action.payload); // Add the new research data
      })
      .addCase(addPost2.rejected, (state, action) => {
        state.status = 'failed'; // Set status to failed
        state.error = action.payload; // Set the error
      });
  },
});

export default ResearchSlice.reducer;
