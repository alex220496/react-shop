import React from 'react'
import {keys} from 'lodash'
import products, { getProductsObj } from '../../App/Main/Products/products'
import CartProductListItem from './CartProductListItem'

const CartProductList = ({
    productsInCart,
    productsObj = getProductsObj(products),
    CartItem=CartProductListItem
}) => {
    return (
        <div>
            {
                keys(productsInCart).map(productId =>(
                    <CartItem
                        key={productId}
                        product={productsObj[productId]}
                        productCount={productsInCart[productId]}
                    />
                    
                ))    
            }
        </div>
    )
}

export default CartProductList