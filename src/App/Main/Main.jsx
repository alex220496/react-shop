import React from "react"
import { Route } from "react-router"
import { Testimonials } from "../../Components/Testimonials/Testimonials"
import CartPage from './CartPage/CartPage'
import PaymentPage from './PaymentPage/PaymentPage'
import ShippingPage from './ShippingPage/ShippingPage'
import ProductsList from './Products/ProductsList'



const Main = ({
    products,
    addProductToCart,
    productsInCart,
    removeProductFromCart,
    changeProductCount,
    
}) => {
    return (
        
           <main className="main">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3">
                            Filter
                        </div>
                        <div className="col-lg-9">
                            <Route path="/" exact render={() => <ProductsList 
                                products={products}
                                addProductToCart={addProductToCart}/>}/>
                            <Route path="/cart" render={() => <CartPage 
                                products={products}
                                removeProductFromCart={removeProductFromCart}
                                changeProductCount={changeProductCount}
                                productsInCart={productsInCart}/>}/>
                            <Route path="/payment" component={PaymentPage}/>
                            <Route path="/shipping" component={ShippingPage}/>
                            <Route path="/" exact component={Testimonials}/>

                        </div>
                    </div>
                </div>
            </main> 
       
    )
}

export default Main