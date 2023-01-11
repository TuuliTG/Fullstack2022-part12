import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'

import storage from 'redux-persist/lib/storage'

import { combineReducers } from 'redux'
import { persistReducer, persistStore } from 'redux-persist'
import productReducer from './reducers/product'
import shoppingCartReducer from './reducers/shoppingCart'

const rootReducer = combineReducers({
  products: productReducer,
  shoppingCart: shoppingCartReducer
})

const persistConfig = {
  key: 'root',
  storage,
  
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: ['persist/PERSIST'],
    },
  }),
})

export const persistor = persistStore(store)

export default store