import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
export const getItems = createAsyncThunk('items/getItems', async () => {
  const response = await axios.get('http://192.168.100.18:8000/api/user/home', {
  
    method: 'get',
    headers: {
      "Content-Type": 'application/json',
      "Accept": 'application/json',
      Authorization: 'Bearer 2369|PHwWb7XoP4GJ20Ai7eZQl45N31omwI74SiwDvwT7',

    },
    body: JSON.stringify()

  })

  return response.data;
})
export const usersSlice = createSlice({
  name: 'items',
  // eslint-disable-next-line no-dupe-keys
  initialState: {
   
    items: {},

    loading: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getItems.pending, (state, action) => {
      if (state.loading === 'idle') {
        state.loading = 'pending'
      }
    })
    builder.addCase(getItems.fulfilled, (state, action) => {
      if (state.loading === 'pending') {
        state.items = action.payload.data.nearby_restraunt
        state.loading = 'fulfilled'
        console.log(state.items, state.loading)
      }
    })
    builder.addCase(getItems.rejected, (state, action) => {
      if (state.loading === 'pending') {
        state.loading = 'idle'
        state.error = 'Error occured'
        
      }
    })
  },
})
export default usersSlice.reducer