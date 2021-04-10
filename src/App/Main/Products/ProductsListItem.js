import React from 'react'
import "./productListItem.css"

const  ProductsListItem = () => {
    return (
        <div className="product-list-item">
            <div className="product-title">iPhoneX</div>
            <div className="product-description">This is iPhoneX</div>
            <div className="product-features">Type: phone</div>
            <div className="product-features">Capecity 64Gb</div>
            <div className="product-price">500$</div>
            <div className="btn-add-to-cart">add to cart</div>
        </div>
    )
}

export default ProductsListItem