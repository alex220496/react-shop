import React, { Component } from 'react'
import {omit} from 'lodash'

import '../assets/reset.css'
import '../assets/base.css'

import Header from './Header/Header'
import Main from './Main/Main'
import Footer from './Footer/Footer'
import axios from 'axios'

class App extends Component {

  state = {

    productsInCart:{  
      
    },  
    products:[]
  }

      componentDidMount() {
        axios.get("https://run.mocky.io/v3/ea7b7859-1a85-421a-b5df-cd143774ded6")
        .then(res => res.data)
        .then(data => (
          this.setState({
            products:data.products
          })
        ))
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
            products={this.state.products}
          /> 
          <Footer/>
        </>
    )
  }
} 



export default App;