import React from 'react'


import './reset.css'
import './base.css'
import './header.css'
import './menu.css'
import './cart.css'

const App = () => {
    return (
        <>
          <Header/>   
          <Main/> 
          <Footer/>
           
        </>
    )
}

const Header = () => {
    return (
        
            <header class="header">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-3">
                            <div class="logo">
                                <img src="img/logo.png" alt=""/>
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <div class="menu">
                                <ul>
                                    <li><a href="">Home</a></li>
                                    <li><a href="">Products</a></li>
                                    <li><a href="">Payment</a></li>
                                    <li><a href="">Shipping</a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-lg-3">
                            <div class="cart text-center">
                                <div class="products-count">0</div>
                                <div class="products-price">$500</div>
                            </div>
                        </div>
                    </div>
                </div>
            </header> 
        
    )
}

const Main = () => {
    return (
        
           <main class="main">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-3">
                            Filter
                        </div>
                        <div class="col-lg-9">
                            Product List
                        </div>
                    </div>
                </div>
            </main> 
       
    )
}

const Footer = () => {
    return (
        
             <footer class="footer">
                 Footer
             </footer>       
        
    )
}

export default App;