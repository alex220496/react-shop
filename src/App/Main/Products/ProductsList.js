import React from 'react'
import ProductsListItem from './ProductsListItem'
import products from './products'
import "./productListItem.css"



const ProductsList = ({
    addProductToCart
}) => {
    return(
        <>
            <h1 className="page-title">Products</h1>
            <div className="row">  
                    {
                        products.map(({
                            id,
                            name,
                            description,
                            type,
                            capacity,
                            price,
                            image
                        }) => (
                            <div className="col-lg-6" key={id}>
                                <ProductsListItem
                                    id={id}
                                    name={name}
                                    description={description}
                                    type={type}
                                    capacity={capacity}
                                    price={price}
                                    image={image}
                                    addProductToCart={addProductToCart}
                                />     
                            </div>
                        ))
                    }
            </div>
        </>
    )
    
}

export default ProductsList