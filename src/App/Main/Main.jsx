import React from "react"
import { Route } from "react-router"
import CartPage from './CartPage/CartPage'
import PaymentPage from './PaymentPage/PaymentPage'
import ShippingPage from './ShippingPage/ShippingPage'
import ProductsList from './Products/ProductsList'


const Main = ({
    addProductToCart,
    productsInCart,
    removeProductFromCart
}) => {
    return (
        
           <main className="main">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3">
                            Filter
                        </div>
                        <div className="col-lg-9">
                            <Route path="/" exact render={() => <ProductsList addProductToCart={addProductToCart}/>}/>
                            <Route path="/cart" render={() => <CartPage 
                                removeProductFromCart={removeProductFromCart}
                                productsInCart={productsInCart}/>}/>
                            <Route path="/payment" component={PaymentPage}/>
                            <Route path="/shipping" component={ShippingPage}/>
                            

                        </div>
                    </div>
                </div>
            </main> 
       
    )
}

export default Main