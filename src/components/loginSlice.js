import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const initialState = {
  userName: '',
  password: '',
  error: false,
  people: [],
}

export const fetchPeople = createAsyncThunk(
  'login/fetchPeople',
  async (response) => {
    const result = await response
    console.log(result)
    return result
  },
)
export const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    setUserName: (state, action) => {
      state.userName = action.payload
    },
    setPassword: (state, action) => {
      state.password = action.payload
    },
    setError: (state, action) => {
      state.error = action.payload
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPeople.fulfilled, (state, action) => {
      state.people = action.payload
    })
  },
})

export const { setUserName, setPassword, setError } = loginSlice.actions
export default loginSlice.reducer
