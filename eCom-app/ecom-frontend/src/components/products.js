import React from "react";
import { useSelector, useDispatch } from 'react-redux'
import { addProduct } from '../reducers/shoppingCart'

const Products = () => {
    const products = useSelector((state) => state.products)
    const dispatch = useDispatch()
    const handleButton = (product) => {
        dispatch(addProduct(product))
        
    }

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>product name</th>
                        <th>price</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product) => (
                        <tr key={product.id} >
                            <td>{product.name}</td>
                            <td>{product.price}</td>
                            <td><button onClick={() => {handleButton(product)}}>Add to cart</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Products