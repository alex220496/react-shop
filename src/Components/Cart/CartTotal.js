import React from 'react'
import {keys} from 'lodash'
import products, { getProductsObj } from '../../App/Main/Products/products'

const CartTotal = ({
    productsInCart,
    productsObj = getProductsObj(products)
}) => {
    return (
        <div>
            Total: {
                keys(productsInCart).reduce((total,productId) =>(
                    total + (productsObj[productId].price * productsInCart[productId])
                ), 0)
            } 
        </div>
        
    

        
        
    )
}

export default CartTotal