import React from 'react'
import './cart.css'
import {Link} from 'react-router-dom'
import CartTotal from '../../../Components/Cart/CartTotal'
import CartProductList from '../../../Components/Cart/CartProductList'



const Cart = ({
    products,
    productsInCart,
    
}) => {
    return (
        <div className="cart text-center">
            <CartProductList
            products={products}
            productsInCart= {productsInCart}
            
            />

            <CartTotal
                products={products}
                productsInCart={productsInCart }
            />
            <Link to="/cart">Show cart</Link>
        </div>
    )
}

export default Cart 