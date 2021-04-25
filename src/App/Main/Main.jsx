import React from "react"
import { Route } from "react-router"
import CartPage from './CartPage/CartPage'
import ProductsList from './Products/ProductsList'


const Main = ({
    addProductToCart
}) => {
    return (
        
           <main className="main">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3">
                            Filter
                        </div>
                        <div className="col-lg-9">
                            {/* {<ProductsList
                               addProductToCart={addProductToCart} 
                            />} */}
                            <Route path="/" exact render={() =>(
                                <ProductsList
                                addProductToCart={addProductToCart}
                                />

                            )}/>
                            <Route path="/cart" component={CartPage}/>
                            

                        </div>
                    </div>
                </div>
            </main> 
       
    )
}

export default Main