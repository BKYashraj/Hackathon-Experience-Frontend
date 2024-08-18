import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";
import axiosInstance from "../../Helper/axiosInstance";

const initialState = {
  isLoggedIn: localStorage.getItem("isLoggedIn") === "true" || false,
  role: localStorage.getItem("role") || "",
  data: JSON.parse(localStorage.getItem("data")) || {},
  // data: (() => {
  //   const data = localStorage.getItem("data");
  //   try {
  //     return JSON.parse(data) || {};
  //   } catch {
  //     return {};
  //   }
  // })(),
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
        console.log("Action Payload:", action.payload);  // This will contain the response from the server.

        state.isLoggedIn = true;
        state.role = action?.payload?.data?.data?.userRole;
        state.data = action?.payload?.data?.data?.userData;

        localStorage.setItem("isLoggedIn", true);
        localStorage.setItem("role", action?.payload?.data?.data?.userRole);
        localStorage.setItem(
          "data",
          JSON.stringify(action?.payload?.data?.data?.userData)
        );
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
