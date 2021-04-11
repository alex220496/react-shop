import React from 'react'
import PropTypes from 'prop-types'
import "./productListItem.css"


// const user = {
//     name: "jack",
//     age: 25
// }

// const {name, age} = user;
// console.log(name);
// console.log(age);




const  ProductsListItem = ({
    name,
    description,
    type,
    capacity,
    price

}) => {
    return (
        <div className="product-list-item">
            <div className="product-title">{name}</div>
            <div className="product-description">{description}</div>
            <div className="product-features">{type}</div>
            <div className="product-features">{capacity} Gb</div>
            <div className="product-price">{price}$</div>
            <div className="btn-add-to-cart">add to cart</div>
        </div>
    )
}

ProductsListItem.propTypes = {
    name:PropTypes.string.isRequired,
    description:PropTypes.string,
    type:PropTypes.string.isRequired,
    capacity:PropTypes.number.isRequired,
    price:PropTypes.number.isRequired
}

ProductsListItem.defaultProps = {
    description: "No description."
}


export default ProductsListItem