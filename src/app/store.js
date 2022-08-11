import { configureStore } from '@reduxjs/toolkit'
import loginReducer from '../components/loginSlice'
import profileReducer from '../components/profileSlice'

export const store = configureStore({
  reducer: {
    login: loginReducer,
    profile: profileReducer,
  },
})
