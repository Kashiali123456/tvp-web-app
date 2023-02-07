import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
export const getOrderById = createAsyncThunk('orderbyid/getOrderById ', async () => {
  const response = await axios.get('http://192.168.100.18:8000/api/user/order-by-id/1', {
    headers: {
      "Content-Type": 'application/json',
      "Accept": 'application/json',
      Authorization: 'Bearer 2369|PHwWb7XoP4GJ20Ai7eZQl45N31omwI74SiwDvwT7',

    },
    body: JSON.stringify()

  })

  return response.data;
})
export const OrderById = createSlice({
  name: 'orderbyid',
  // eslint-disable-next-line no-dupe-keys
  initialState: {
    orderbyid: {},
    loading: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getOrderById.pending, (state, action) => {
      if (state.loading === 'idle') {
        state.loading = 'pending'
      }
    })
    builder.addCase(getOrderById.fulfilled, (state, action) => {
      if (state.loading === 'pending') {
        state.orderbyid = action.payload.data.order_details
        state.dealItemsList = action.payload.data.order_details[0].item
        state.loading = 'fulfilled'
      }
    })
    builder.addCase(getOrderById.rejected, (state, action) => {
      if (state.loading === 'pending') {
        state.loading = 'idle'
        state.error = 'Error occured'

      }
    })
  },
})
export default OrderById.reducer