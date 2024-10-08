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
    console.log("Data is ",data)
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

export const updatePost = createAsyncThunk(
  "hackathon/updatepost",
  async ({ data, id }, { rejectWithValue }) => {
    try {
      // Here, wrap the axios request inside toast.promise
      const apiResponse = await toast.promise(
        axiosInstance.post(`/hackathon/update/${id}`, data),
        {
          loading: "Updating your hackathon experience...",
          success: "Hackathon experience updated successfully!",
          error:
            "Oops! Something went wrong while updating your experience. Please try again.",
        }
      );

      console.log("My response", apiResponse);
      return apiResponse;
    } catch (error) {
      console.log(error);
      // Return the error using rejectWithValue to handle it in the reducer
      return rejectWithValue(error.response?.data || "Something went wrong");
    }
  }
);

// export const updatePost = createAsyncThunk(
//   "hackathon/updatepost",
//   async ({ data, id }) => {
//     try {
//       const response = await axiosInstance.post(`/hackathon/update/${id}`, data);

//       toast.promise(response, {
//         loading: "Adding your hackathon experience...",
//         success: "Hackathon experience added successfully!",
//         error:
//           "Oops! Something went wrong while adding your experience. Please try again.",
//       });

//       const apiResponse = await response;
//       console.log("My response", apiResponse);
//       return apiResponse;
//     } catch (error) {
//       console.log(error);
//     }
//   }
// );

// Give one entry
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
  "/products/self/getHackDetails",
  async (_, thunkAPI) => {
    try {
      // Access the state using thunkAPI
      const state = thunkAPI.getState();

      // Assuming the ID is stored in state, adjust the path based on your state structure
      const id = state.auth.id || state.auth.data.id; // Replace with actual state path to the ID

      // If the ID is retrieved in some other way, adjust accordingly

      // Make the API call with the retrieved ID
      const product2 = axiosInstance.get(`/users/hacks/${id}`);
      toast.promise(product2, {
        loading: "Loading the Post",
        error: "Something went wrong, cannot load post",
        success: "Your Posts loaded successfully",
      });

      
      return product2;
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


// For reseacr

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
        const deletedHackathonId = action.payload.id; // Get the id of the deleted hackathon
    
        // Filter out the deleted hackathon from the state
        state.SelfHackathonData = state.SelfHackathonData.filter(
          (hackathon) => hackathon._id !== deletedHackathonId
        );
    });
  },
});

export default HackathonSlice.reducer;
