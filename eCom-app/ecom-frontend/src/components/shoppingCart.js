import React from "react"
import { useSelector, useDispatch } from 'react-redux'
import { removeProduct } from "../reducers/shoppingCart"

const ShoppingCart = () => {
    const shoppingCart = useSelector((state) => state.shoppingCart.products)
    const dispatch = useDispatch()

    const handleButton = (product) => {
        dispatch(removeProduct(product))
    }
    return (
        <div>
            <h3>Your Shopping Cart</h3>
            <table>
                <thead>
                    <tr>
                        <th>product name</th>
                        <th>price</th>
                        <th>Quantity</th>
                    </tr>
                </thead>
                <tbody>
                    {shoppingCart.map((product) => (
                        <tr key={product.id} >
                            <td>{product.name}</td>
                            <td>{product.price}</td>
                            <td>{product.quantity}</td>
                            <td><button onClick={() => {handleButton(product)}}>Remove from cart</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default ShoppingCart