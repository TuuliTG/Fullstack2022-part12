import React, {useEffect} from "react"
import axios from '../util/apiClient'
import { useDispatch } from 'react-redux'
import {setProducts} from '../reducers/product'
import Products from "./products"
import ShoppingCart from "./shoppingCart"
import { refresh } from "../reducers/shoppingCart"


const FrontPage = () => {
    
    const dispatch = useDispatch()

    const refreshProducts = async () => {
        const { data } = await axios.get('/products')
        
        dispatch(setProducts(data))
    }
    
    useEffect(() => {
    refreshProducts()
    }, [])
    
    
    const handleRefresh = () => {
        dispatch(refresh())
    }

    return (
        <div>
            <h1>Welcome to my webshop</h1>
            <h2>Products</h2>
            <Products/>
            <ShoppingCart />
            <button onClick={() => {handleRefresh()} }>Refresh shopping cart</button>
        </div>
    )
}

export default FrontPage