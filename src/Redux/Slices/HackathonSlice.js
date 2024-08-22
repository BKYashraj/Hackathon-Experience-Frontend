import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../../Helper/axiosInstance";
import toast from "react-hot-toast";

const initialState = {
  hackathonsData: [],
  SelfHackathonData: [],
};

export const getAllPosts = createAsyncThunk("/products/getAll", async () => {
  try {
    const products = await axiosInstance.get("/hackathon");
    toast.success("Posts loaded successfully");
    return products;
  } catch (error) {
    console.log(error);
    toast.error("Something went wrong");
  }
});

export const addPost = createAsyncThunk("hackathon/addpost", async (data) => {
  try {
    const response = axiosInstance.post("/hackathon", data);

    toast.promise(response, {
      loading: "Adding your hackathon experience...",
      success: "Hackathon experience added successfully!",
      error:
        "Oops! Something went wrong while adding your experience. Please try again.",
    });

    const apiResponse = await response;
    console.log("My response", apiResponse);
    return apiResponse;
  } catch (error) {
    console.log(error);
  }
});

export const getHackDetails = createAsyncThunk(
  "/products/getDetails",
  async (id) => {
    try {
      const product = axiosInstance.get(`/hackathon/${id}`);
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

export const getSelfHackDetails = createAsyncThunk(
  "/products/self/getDetails",
  async (_, thunkAPI) => {
    try {
      // Access the state using thunkAPI
      const state = thunkAPI.getState();

      // Assuming the ID is stored in state, adjust the path based on your state structure
      const id = state.auth.id || state.auth.data.id; // Replace with actual state path to the ID

      // If the ID is retrieved in some other way, adjust accordingly

      // Make the API call with the retrieved ID
      const product = axiosInstance.get(`/users/hacks/${id}`);
      toast.promise(product, {
        loading: "Loading the Post",
        error: "Something went wrong, cannot load post",
        success: "Your Posts loaded successfully",
      });

      const apiResponse = await product;
      console.log("aaaaaaaaaaaaaaa", apiResponse);
      return apiResponse;
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  }
);

export const deletehack = createAsyncThunk("hack/delete", async (id) => {
  try {
    const response = axiosInstance.delete(`/hackathon/${id}`);

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

const HackathonSlice = createSlice({
  name: "hackathons",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllPosts.fulfilled, (state, action) => {
        console.log("Action Payload for:", action.payload);
        state.hackathonsData = action?.payload?.data?.data;
      })
      .addCase(getSelfHackDetails.fulfilled, (state, action) => {
        console.log("Action Payload :", action.payload);
        state.SelfHackathonData = action?.payload?.data?.data;
      })
     .addCase(deletehack.fulfilled, (state, action) => {
  console.log("Action Payload:", action.payload);
  const deletedHackathonId = action.payload.id; // Get the id of the deleted hackathon

  // Filter out the deleted hackathon from the state
  state.SelfHackathonData = state.SelfHackathonData.filter(
    (hackathon) => hackathon._id !== deletedHackathonId
  );
});
  },
});

export default HackathonSlice.reducer;
