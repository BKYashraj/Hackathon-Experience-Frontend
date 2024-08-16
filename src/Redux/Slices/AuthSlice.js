import { createSlice } from "@reduxjs/toolkit";

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


const AuthSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
});

export default AuthSlice.reducer;