import React, { Component } from 'react'

import '../assets/reset.css'
import '../assets/base.css'

import Header from './Header/Header'
import Main from './Main/Main'
import Footer from './Footer/Footer'

class App extends Component {

  state = {
     cartData: {
       count:0,
       price:0
     }
  }

      addProductToCart = (count, price) => {
        this.setState((prevState) =>({
          cartData:{
            count: prevState.cartData.count + count,
            price: prevState.cartData.price + (price * count)
          }
      }))
      }
      

  render() {
    return (
        <>
          <Header
            cartData={this.state.cartData}
          />    
          <Main
            addProductToCart={this.addProductToCart}
          /> 
          <Footer/>
        </>
    )

  }

} 



export default App;