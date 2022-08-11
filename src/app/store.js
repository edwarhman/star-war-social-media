import { configureStore } from '@reduxjs/toolkit'
import loginReducer from '../components/loginSlice'

export const store = configureStore({
  reducer: {
    login: loginReducer,
  },
})
