import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
// import AddToCart from '../Pages/AddToCart';
export const getCart = createAsyncThunk('cart/getCart ', async () => {
  const response = await axios.get('http://192.168.100.18:8000/api/user/get-cart', {
    method: 'get',
    headers: {
      "Content-Type": 'application/json',
      "Accept": 'application/json',
      Authorization: 'Bearer 2460|VQs5aaLQ2ajnIvc2zN5cbKJM3f6L73q8iGWMnsJl',

    },
    body: JSON.stringify()

  })

  return response.data;
})
export const AddToCartSlice = createSlice({
  name: 'cart',
  // eslint-disable-next-line no-dupe-keys
  initialState: {
    cart: {},
    loading: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCart.pending, (state, action) => {
      if (state.loading === 'idle') {
        state.loading = 'pending'
      }
    })
    builder.addCase(getCart.fulfilled, (state, action) => {
      if (state.loading === 'pending') {
        state.cart = action.payload.data
        state.loading = 'fulfilled'
        console.log('asdfsfdsgidhdf34654675',  state.cart)
      }
    })
    builder.addCase(getCart.rejected, (state, action) => {
      if (state.loading === 'pending') {
        state.loading = 'idle'
        state.error = 'Error occured'

      }
    })
  },
})
export default AddToCartSlice.reducer