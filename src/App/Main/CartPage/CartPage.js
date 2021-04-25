import React from 'react'
import {keys} from 'lodash'
import products from '../Products/products'

const productsObj = products.reduce((obj, product) =>({
    ...obj,
    [product.id]:product
}),{})

const CartPage = ({
    productsInCart
}) => {
    return (
        <>
        
            <h1 className="page-title">Cart</h1>
            <div>
                {
                    keys(productsInCart).map(productId =>(
                        <div key={productId}> {productsObj[productId].name} 
                        : {productsInCart[productId]}</div>
                    ))    
                }
            </div>

            <div>
                Total: {
                    keys(productsInCart).reduce((total,productId) =>(
                        total + (productsObj[productId].price * productsInCart[productId])
                    ), 0)
                } 
            </div>
        
        </>
    )
}

export default CartPage