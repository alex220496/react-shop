import React, { Component } from 'react'
import {omit} from 'lodash'

import '../assets/reset.css'
import '../assets/base.css'

import Header from './Header/Header'
import Main from './Main/Main'
import Footer from './Footer/Footer'

class App extends Component {

  state = {

    productsInCart:{  
      
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
      removeProductFromCart = (productId,count) => {
        this.setState((prevState) => ({
          productsInCart:omit(prevState.productsInCart,productId)
        }))
      
      }

      changeProductCount = (productId, count) => {
          this.setState((prevState) =>({
            productsInCart:{
              ...prevState.productsInCart,
              [productId]:count
            }
          }))
      }
      
  render() {
    return (
        <>
          <Header
            productsInCart= {this.state.productsInCart}
          />  
          <Main
            addProductToCart={this.addProductToCart}
            productsInCart={this.state.productsInCart}
            removeProductFromCart={this.removeProductFromCart}
            changeProductCount={this.changeProductCount}
          /> 
          <Footer/>
        </>
    )
  }
} 



export default App;