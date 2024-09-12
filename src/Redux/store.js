import { configureStore } from '@reduxjs/toolkit'
import AuthSliceReducer from './Slices/AuthSlice'
import HackathonSliceReducer from './Slices/HackathonSlice'
// import ProductSliceReducer from './Slices/HackSlice'
import ResearchSliceReducer from './Slices/ReseacrchSlice'

export const store = configureStore({
  reducer: {
    auth: AuthSliceReducer,
    hackathons: HackathonSliceReducer,
    Research: ResearchSliceReducer,
    // product: ProductSliceReducer
  },
  devTools: true

})