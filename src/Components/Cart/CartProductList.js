import React from 'react'
import {keys} from 'lodash'
import { getProductsObj } from '../../App/Main/Products/products'
import CartProductListItem from './CartProductListItem'

const CartProductList = ({
    products,
    productsInCart,
    productsObj = getProductsObj(products),
    CartItem=CartProductListItem,
    removeProductFromCart,
    changeProductCount,
    
    
}) => {
    if(products.length===0) {
        return null;
    } else {
        return (
            <div >
                {
                    keys(productsInCart).map(productId =>(
                        <CartItem
                            key={productId}
                            product={productsObj[productId]}
                            productCount={productsInCart[productId]}
                            removeProductFromCart={removeProductFromCart}
                            changeProductCount={changeProductCount}
                            
                        />
                        
                    ))    
                }
            </div>
        )    
    }
   
}

export default CartProductList