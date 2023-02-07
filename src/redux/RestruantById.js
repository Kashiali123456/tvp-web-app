import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
export const getRestruants = createAsyncThunk('restruants/getRestruants', async () => {
  const response = await axios.get('http://192.168.100.18:8000/api/user/restraunt-by-id/1', {
    headers:{
        "Content-Type": 'application/json',
        "Accept": 'application/json',
        Authorization: 'Bearer 2259|bf73lq0uOH438ucYg5XeXbSC1NqhvFjBbgInSkg1',
  
    },
    body:JSON.stringify()

})

  return response.data
  
})

export const RestruantById= createSlice({
  name: 'restraunts',
  initialState: {
    restraunts: {},

    loading: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getRestruants.pending, (state, action) => {
      if (state.loading === 'idle') {
        state.loading = 'pending'
      }
    })
    builder.addCase(getRestruants.fulfilled, (state, action) => {
      if (state.loading === 'pending') {
        state.restraunts = action.payload.data
        state.loading = 'fulfilled'
        console.log(state.restraunts, state.loading)
      }
    })
    builder.addCase(getRestruants.rejected, (state, action) => {
      if (state.loading === 'pending') {
        state.loading = 'idle'
        state.error = 'Error occured'
      }
    })
  },
})
export default RestruantById.reducer