import { createSlice } from '@reduxjs/toolkit'

const initialState = [
    {
        name: "product",
        price: 0.0
    }
]

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProducts(state, action) {
        const products = action.payload
        if (products.length === 0) {
          return null
        }
        return products
    },
  }
})

export const {
  setProducts
} = productSlice.actions
export default productSlice.reducer
