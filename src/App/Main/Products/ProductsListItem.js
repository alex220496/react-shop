import React from 'react'
import "./productListItem.css"

const  ProductsListItem = (props) => {
    console.log(props);
    return (
        <div className="product-list-item">
            <div className="product-title">{props.name}</div>
            <div className="product-description">{props.description}</div>
            <div className="product-features">{props.type}</div>
            <div className="product-features">{props.capacity} Gb</div>
            <div className="product-price">{props.price}$</div>
            <div className="btn-add-to-cart">add to cart</div>
        </div>
    )
}

export default ProductsListItem