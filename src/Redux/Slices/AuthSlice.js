import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";
import axiosInstance from "../../Helper/axiosInstance";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { app } from "../../firebase";

// Load persisted data from localStorage
let persistedState = {};
try {
  const storedState = localStorage.getItem("authState");
  persistedState = storedState ? JSON.parse(storedState) : {};
} catch (error) {
  console.error("Error parsing JSON from localStorage:", error);
}

// const initialState = {
//   isLoggedIn: localStorage.getItem("isLoggedIn") === "true" || persistedState.isLoggedIn || false,
//   role: localStorage.getItem("role") ||  persistedState.role || "",
//   data: data,
// };

const initialState = {
  isLoggedIn: persistedState.isLoggedIn || false,
  role: persistedState.role || "",
  email: persistedState.email || "",
  name: persistedState.name || "",
  photoURL: persistedState.photoURL || "",
  id: persistedState.id || "",
  data: persistedState.data || {},
};

// Save state to localStorage
const saveStateToLocalStorage = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("authState", serializedState);
  } catch (error) {
    console.error("Could not save state:", error);
  }
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




// Thunk for checking authentication state persistence
export const checkAuthState = createAsyncThunk(
  'auth/checkAuthState',
  async (_, { dispatch }) => {
    const auth = getAuth(app);
    return new Promise((resolve) => {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          const userData = {
            name: user.displayName,
            email: user.email,
            photo: user.photoURL,
          };
          dispatch(GoogleSignIn(userData));
          resolve(userData);
        } else {
          resolve(null);
        }
      });
    });
  }
);

const AuthSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
    .addCase(signIn.fulfilled, (state, action) => {
      state.isLoggedIn = true;
      state.role = action?.payload?.data?.userRole;
      state.email = action?.payload?.data?.userData?.email;
      state.name = action?.payload?.data?.userData?.firstName;
      state.id = action?.payload?.data?.userData?.id;
      saveStateToLocalStorage(state);
    })
    .addCase(GoogleSignIn.fulfilled, (state, action) => {
      state.isLoggedIn = true;
      state.role = action?.payload?.data?.role;
      state.email = action?.payload?.data?.email;
      state.name = action?.payload?.data?.firstName;
      state.photoURL = action?.payload?.data?.avatar;
      state.id = action?.payload?.data?.id;
      saveStateToLocalStorage(state);
    })
    .addCase(checkAuthState.fulfilled, (state, action) => {
      if (action.payload) {
        state.isLoggedIn = true;
        state.role = action?.payload?.data?.role;
        state.email = action?.payload?.data?.email;
        state.name = action?.payload?.data?.firstName;
        state.photoURL = action?.payload?.data?.avatar;
        state.id = action?.payload?.data?.id;
        state.status = "succeeded";
        saveStateToLocalStorage(state);
      }
    })
    .addCase(logout.fulfilled, (state) => {
      state.isLoggedIn = false;
      state.role = "";
      state.email = "";
      state.name = "";
      state.photoURL = "";
      state.id = "";
      state.data = {};
      saveStateToLocalStorage(state);
    });
    //   .addCase(GoogleSignIn.fulfilled, (state, action) => {
    //     // This will execute when the GoogleSignIn thunk is fulfilled
    //     console.log("Action Payload for google auth:", action.payload);
    //     // const userData = action?.payload?.data?.data?.userData;
    
    //     state.isLoggedIn = true;
    //     state.role = action?.payload?.data?.role;
    //     state.email = action?.payload?.data?.email;
    //     state.name = action?.payload?.data?.firstName;
    //     state.photoURL = action?.payload?.data?.avatar;
    //     state.id = action?.payload?.data?.id;
    
    //     localStorage.setItem("isLoggedIn", true);
    //     localStorage.setItem("role", action?.payload?.data?.role);
    //     localStorage.setItem("email", action?.payload?.data?.email);
    //     localStorage.setItem("name", action?.payload?.data?.firstName);
    //     localStorage.setItem("photoURL", action?.payload?.data?.avatar);
    //     localStorage.setItem("id", action?.payload?.data?.id);
    //     // localStorage.setItem("data", JSON.stringify(userData));
    // }).addCase(checkAuthState.fulfilled, (state, action) => {
    //   if (action.payload) {
    //     state.isLoggedIn = true;
    //     state.role = action?.payload?.data?.role;
    //     state.email = action?.payload?.data?.email;
    //     state.name = action?.payload?.data?.firstName;
    //     state.photoURL = action?.payload?.data?.avatar;
    //     state.id = action?.payload?.data?.id;
    //     state.status = 'succeeded';
    //     localStorage.setItem("isLoggedIn", true);
    //     localStorage.setItem("role", action?.payload?.data?.role);
    //     localStorage.setItem("email", action?.payload?.data?.email);
    //     localStorage.setItem("name", action?.payload?.data?.firstName);
    //     localStorage.setItem("photoURL", action?.payload?.data?.avatar);
    //     localStorage.setItem("id", action?.payload?.data?.id);
    //   }
    // })
    //   .addCase(logout.fulfilled, (state) => {
    //     // reducer which will execute when the logout thunk is fulfilled
    //     localStorage.setItem("isLoggedIn", false);
    //     localStorage.setItem("role", "");
    //     localStorage.setItem("data", JSON.stringify({}));
    //     state.isLoggedIn = false;
    //     state.role = "";
    //     state.data = {};
    //   });
  },
});

export default AuthSlice.reducer;
