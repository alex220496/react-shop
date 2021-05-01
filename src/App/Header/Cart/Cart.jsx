import React from 'react'
import {keys} from 'lodash'
import './cart.css'
import products, { getProductsObj } from '../../Main/Products/products'
import {Link} from 'react-router-dom'
import CartTotal from '../../../Components/Cart/CartTotal'



const Cart = ({
    productsInCart,
    productsObj = getProductsObj(products)
}) => {
    return (
        <div className="cart text-center">
            {
                keys(productsInCart).map(productId =>(
                    <div key={productId}> {productsObj[productId].name} 
                    : {productsInCart[productId]}</div>
                ))    
            }

            <CartTotal
                productsInCart={productsInCart }
            />
            <Link to="/cart">Show cart</Link>
        </div>
    )
}

export default Cart 