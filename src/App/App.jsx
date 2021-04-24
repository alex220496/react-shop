import React, { Component } from 'react'

import '../assets/reset.css'
import '../assets/base.css'

import Header from './Header/Header'
import Main from './Main/Main'
import Footer from './Footer/Footer'

class App extends Component {

  state = {

    productsInCart:{
        1:5,
        2:3,
        3:0
    }

    
  }

      addProductToCart = (id,count) => {
        this.setState((prevState) =>({
          productsInCart:   {
            ...prevState.productsInCart,
            [id]: (prevState.productsInCart[id] || 0) + count
            
          }
          
      }))
      
      

      }
      

  render() {
    return (
        <>
          <Header
            productsInCart= {this.state.productsInCart}
          />  
          <button onClick={() => this.addProductToCart(2,2)}>add to cart</button>  
          <Main
            addProductToCart={this.addProductToCart}
          /> 
          <Footer/>
        </>
    )

  }

} 



export default App;