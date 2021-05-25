import React from 'react'
import {Link} from 'react-router-dom'
import CartTotal from '../../../Components/Cart/CartTotal'
import CartProductList from '../../../Components/Cart/CartProductList'
import CartProductListItemExtended from '../../../Components/Cart/CartProductListItemExtended'



const CartPage = ({
    products,
    productsInCart,
    removeProductFromCart,
    changeProductCount,
    
}) => {
    return (
        <>
        
            <h1 className="page-title">Cart</h1>
            <CartProductList
                products={products}
                productsInCart= {productsInCart}
                CartItem={CartProductListItemExtended}
                removeProductFromCart={removeProductFromCart}
                changeProductCount={changeProductCount}
                
            />

            <CartTotal
                products={products}
                productsInCart={productsInCart}
            />
            <Link to="/checkout">Procced to checkout</Link>
        
        </>
    )
}

export default CartPage