import React from 'react'

import '../assets/reset.css'
import '../assets/base.css'
import './header.css'
import './menu.css'
import './cart.css'
import Header from './Header/Header'
import Main from './Main/Main'
import Footer from './Footer/Footer'

const App = () => {
    return (
        <>
          <Header/>   
          <Main/> 
          <Footer/>
           
        </>
    )
}

export default App;