import { createSlice, current } from '@reduxjs/toolkit'

const initialState = {
  products: []
}

const shoppingCartSlice = createSlice({
  name: 'shoppingcart',
  initialState,
  reducers: {
    addProduct(state, action) {
      const product = action.payload
      const isFound = state.products.length === 0 ? false : state.products.some(p => p.name === product.name)
      
      if(!isFound) {
        return {
          ...state,
          products: [
            ...state.products,
            { 
              id: product.id,
              name:  product.name,
              price: product.price,
              quantity: 1
            },
          ]
        }
      } else {        
        const index = state.products.findIndex(p => p.id === product.id)
        state.products[index].quantity += 1 
        return
      }
    },
    refresh(state, action) {
      return initialState
    },
    removeProduct(state, action) {
      const productToBeRemoved = action.payload
      const index = state.products.findIndex(p => p.id === productToBeRemoved.id)
      const product = state.products[index]
      if (product.quantity === 1) {
        state.products = state.products.filter(p => {
          return p.id !== product.id
        })
      } else {
        state.products[index].quantity -= 1 
      }
      return
    }
  }
  
})

export const {
  addProduct,
  refresh,
  removeProduct
} = shoppingCartSlice.actions
export default shoppingCartSlice.reducer
