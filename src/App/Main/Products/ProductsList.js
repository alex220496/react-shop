import React from 'react'
import ProductsListItem from './ProductsListItem'



const ProductsList = () => {
    return(
        <>
        <h1 className="page-title">Products</h1>
        <div className="row">
                <div className="col-lg-6">
                    <ProductsListItem/>
                </div>
        </div>
        </>
    )
    
}

export default ProductsList