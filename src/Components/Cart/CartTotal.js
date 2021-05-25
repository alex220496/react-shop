import React from 'react'
import {keys} from 'lodash'
import { getProductsObj } from '../../App/Main/Products/products'

const CartTotal = ({
    products,
    productsInCart,
    productsObj = getProductsObj(products)
}) => {
    if(products.length===0) {
        return null;
    } else {
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
    
}

export default CartTotal