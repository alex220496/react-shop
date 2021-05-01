import React from 'react'
import {keys} from 'lodash'
import products, {getProductsObj} from '../Products/products'
import CartTotal from '../../../Components/Cart/CartTotal'



const CartPage = ({
    productsInCart,
    productsObj = getProductsObj(products)
}) => {
    return (
        <>
        
            <h1 className="page-title">Cart</h1>
            <div>
                {
                    keys(productsInCart).map(productId =>(
                        <div key={productId}> {productsObj[productId].name} : {productsInCart[productId]} :
                        {productsObj[productId].price}
                        </div>
                    ))    
                }
            </div>

            <CartTotal
                productsInCart={productsInCart}
            />
        
        </>
    )
}

export default CartPage