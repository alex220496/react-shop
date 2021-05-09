import React, { Component } from 'react'
import PropTypes from 'prop-types'
import "./productListItem.css"
import Quantity from '../../../Components/Quantity/Quantity'




class ProductsListItem extends Component {

    
    state = {
        productCount:1,
        price:0
    }

    
    
    onIncrementClick = () => {
        this.setState((prevState) =>({
            productCount:prevState.productCount + 1
        }))
    }

    onDecrementClick =()=> {
        this.setState((prevState) =>({
            productCount:prevState.productCount - 1
        }))
    }

    render() {
        const {
            id,
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


                <Quantity
                    productCount={this.state.productCount}
                    onIncrementClick={this.onIncrementClick}
                    onDecrementClick={this.onDecrementClick}
                    minCount={1}
                />
                 
    
                <button className="btn-add-to-cart" onClick={() => addProductToCart(id,this.state.productCount)}
                                                    
                >add to cart</button>
                
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