import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";
import axiosInstance from "../../Helper/axiosInstance";

let data = {};
try {
  const dataString = localStorage.getItem("data");
  data = dataString ? JSON.parse(dataString) : {};
} catch (error) {
  console.error("Error parsing JSON from localStorage:", error);
}

const initialState = {
  isLoggedIn: localStorage.getItem("isLoggedIn") === "true" || false,
  role: localStorage.getItem("role") || "",
  data: data,
};

export const createAccount = createAsyncThunk(
  "auth/createAccount",
  async (data) => {
    try {
      const response = axiosInstance.post("/users", data);

      toast.promise(response, {
        loading: "Hold back tight, we are registering your id...",
        success: "Account created successfully",
        error: "Ohh No!, something went wrong. Please try again",
      });

      const apiResponse = await response;
      console.log("My response", apiResponse);
      return apiResponse;
    } catch (error) {
      console.log(error);
    }
  }
);

export const signIn = createAsyncThunk("auth/signIn", async (data) => {
  try {
    const response = axiosInstance.post("/auth/login", data);

    toast.promise(response, {
      loading: "Logging in...",
      success: "Logged in successfully",
      error: "Ohh No!, something went wrong. Please try again",
    });

    const apiResponse = await response;
    console.log("My response", apiResponse);
    return apiResponse;
  } catch (error) {
    console.log(error);
  }
});

export const GoogleSignIn = createAsyncThunk(
  "auth/googleSignIn",
  async (data) => {
    try {
      const response = axiosInstance.post("/auth/google", data);

      toast.promise(response, {
        loading: "Logging in...",
        success: "Logged in successfully",
        error: "Ohh No!, something went wrong. Please try again",
      });

      const apiResponse = await response;
      console.log("My response", apiResponse);
      return apiResponse;
    } catch (error) {
      console.log(error);
    }
  }
);

export const logout = createAsyncThunk("auth/logout", async () => {
  try {
    const response = axiosInstance.post("/auth/logout");

    toast.promise(response, {
      loading: "Logging out...",
      success: "Logged out successfully",
      error: "Ohh No!, something went wrong. Please try again",
    });

    const apiResponse = await response;
    return apiResponse;
  } catch (error) {
    console.log(error);
  }
});

const AuthSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(signIn.fulfilled, (state, action) => {
        // reducer which will execute when the login thunk is fulfilled
        console.log("Action Payload:", action.payload); // This will contain the response from the server.

        state.isLoggedIn = true;
        state.role = action?.payload?.data?.userRole;
        state.email = action?.payload?.data?.userData?.email;
        state.name = action?.payload?.data?.userData?.firstName;
        state.id = action?.payload?.data?.userData?.id;
        localStorage.setItem("isLoggedIn", true);
        localStorage.setItem("role", action?.payload?.data?.userRole);
        localStorage.setItem(
          "data",
          JSON.stringify(action?.payload?.data?.userData)
        );
      })
      .addCase(GoogleSignIn.fulfilled, (state, action) => {
        // This will execute when the GoogleSignIn thunk is fulfilled
        console.log("Action Payload:", action.payload);
        // const userData = action?.payload?.data?.data?.userData;
    
        state.isLoggedIn = true;
        state.role = action?.payload?.data?.role;
        state.email = action?.payload?.data?.email;
        state.name = action?.payload?.data?.firstName;
        state.photoURL = action?.payload?.data?.avatar;
    
        localStorage.setItem("isLoggedIn", true);
        localStorage.setItem("role", action?.payload?.data?.role);
        localStorage.setItem("email", action?.payload?.data?.email);
        localStorage.setItem("name", action?.payload?.data?.firstName);
        localStorage.setItem("photoURL", action?.payload?.data?.avatar);
        // localStorage.setItem("data", JSON.stringify(userData));
    })
      .addCase(logout.fulfilled, (state) => {
        // reducer which will execute when the logout thunk is fulfilled
        localStorage.setItem("isLoggedIn", false);
        localStorage.setItem("role", "");
        localStorage.setItem("data", JSON.stringify({}));
        state.isLoggedIn = false;
        state.role = "";
        state.data = {};
      });
  },
});

export default AuthSlice.reducer;
