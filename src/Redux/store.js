import { configureStore } from '@reduxjs/toolkit'
import AuthSliceReducer from './Slices/AuthSlice'
import HackathonSliceReducer from './Slices/HackathonSlice'
import ProductSliceReducer from './Slices/HackSlice'


export const store = configureStore({
  reducer: {
    auth: AuthSliceReducer,
    hackathons: HackathonSliceReducer,
    product: ProductSliceReducer
  },
  devTools: true

})