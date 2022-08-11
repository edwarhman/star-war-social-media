import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const initialState = {
  films: [],
}

export const fetchFilm = createAsyncThunk(
  'profile/fetchfilm',
  async (response) => {
    const result = await response
    console.log(result)
    return result
  },
)

export const profileSlice = createSlice({
  name: 'profile',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchFilm.fulfilled, (state, action) => {
      state.films.push(action.payload)
    })
  },
})

export const { setUserName, setPassword, setError } = profileSlice.actions
export default profileSlice.reducer
