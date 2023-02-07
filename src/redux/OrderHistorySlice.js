import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
export const getOrderHistory = createAsyncThunk('orderhistory/getOrderHistory', async () => {
  const response = await axios.get('http://192.168.100.18:8000/api/user/order-history ', {
  
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
export const OrderHistorySlice = createSlice({
  name: 'orderhistory',
  // eslint-disable-next-line no-dupe-keys
  initialState: {
   
    orderhistory: {},

    loading: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getOrderHistory.pending, (state, action) => {
      if (state.loading === 'idle') {
        state.loading = 'pending'
      }
    })
    builder.addCase(getOrderHistory.fulfilled, (state, action) => {
      if (state.loading === 'pending') {
        state.orderhistory = action.payload.data
        state.loading = 'fulfilled'
     
      }
    })
    builder.addCase(getOrderHistory.rejected, (state, action) => {
      if (state.loading === 'pending') {
        state.loading = 'idle'
        state.error = 'Error occured'
        
      }
    })
  },
})
export default OrderHistorySlice.reducer