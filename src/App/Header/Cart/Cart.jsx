import React from 'react'
import {keys} from 'lodash'
import './cart.css'
import products from '../../Main/Products/products'

const productsObj = products.reduce((obj, product) =>({
    ...obj,
    [product.id]:product
}),{})

const Cart = ({
    productsInCart
}) => {
    return (
        <div className="cart text-center">
            {
                Object.keys(productsInCart).map(productId =>(
                    <div key={productId}> {productsObj[productId].name} 
                    : {productsInCart[productId]}</div>
                ))
            }
            
        </div>
    )
}

export default Cart 