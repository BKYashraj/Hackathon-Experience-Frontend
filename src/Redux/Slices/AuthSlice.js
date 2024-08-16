import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";
import axiosInstance from "../../Helper/axiosInstance";

const initialState = {
  isLoggedIn: localStorage.getItem("isLoggedIn") === 'true' || false,
  role: localStorage.getItem("role") || "",
  data: JSON.parse(localStorage.getItem('data')) || {},
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

export const signIn = createAsyncThunk(
  "auth/signIn",
  async (data) => {
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
  }
);

const AuthSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
});

export default AuthSlice.reducer;