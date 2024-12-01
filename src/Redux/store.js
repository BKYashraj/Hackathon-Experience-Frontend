import { configureStore } from '@reduxjs/toolkit'
import AuthSliceReducer from './Slices/AuthSlice'
import HackathonSliceReducer from './Slices/HackathonSlice'
import SearchSliceReducer from './Slices/SearchSlice'
import ResearchSliceReducer from './Slices/ReseacrchSlice'

export const store = configureStore({
  reducer: {
    auth: AuthSliceReducer,
    hackathons: HackathonSliceReducer,
    Research: ResearchSliceReducer,
    search: SearchSliceReducer,
  },
  devTools: true

})