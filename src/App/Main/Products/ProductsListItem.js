import React, { Component } from 'react'
import PropTypes from 'prop-types'
import "./productListItem.css"




class ProductsListItem extends Component {

    
    state = {
        productCount:1,
        price:0
        
        
    }
    
    onIncrementClick () {
        this.setState((prevState) =>({
            productCount:prevState.productCount + 1
        }))
    }

    onDecrementClick () {
        this.setState((prevState) =>({
            productCount:prevState.productCount - 1
        }))
    }

    render() {
        const {
            name,
            description,
            type,
            capacity,
            price,
            image,
            addProductToCart
        } = this.props

        return (
            <div className="product-list-item">
                <div className="product-img">
                    <img src={image} alt=""/>
                </div>
                <div className="product-title">{name}</div>
                <div className="product-description">{description}</div>
                <div className="product-features">Type: {type}</div>
                <div className="product-features">Capacity: {capacity} Gb</div>
                <div className="product-price">{price}$</div>
                
                 <div className="product-quantity">
                     <button 
                             onClick={() => this.onDecrementClick()}
                             disabled={this.state.productCount <= 1}
                     >-</button>
                     <input type="text" value={this.state.productCount} readOnly/>
                     <button 
                             onClick={() => this.onIncrementClick()}
                             disabled={this.state.productCount >= 10}
                     >+</button>
                 </div>
    
                <button className="btn-add-to-cart" onClick={() => addProductToCart(this.state.productCount,price)}>add to cart</button>
                
            </div>
        )
    }
}


ProductsListItem.propTypes = {
    name:PropTypes.string.isRequired,
    description:PropTypes.string,
    type:PropTypes.string.isRequired,
    capacity:PropTypes.number.isRequired,
    price:PropTypes.number.isRequired
}

ProductsListItem.defaultProps = {
    description: "No description...",
    imgage: "/img/noimage.png"
}


export default ProductsListItem