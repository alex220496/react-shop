import React from 'react'
import ProductsListItem from './ProductsListItem'



const ProductsList = () => {
    return(
        <>
        <h1 className="page-title">Products</h1>
        <div className="row">
                <div className="col-lg-6">
                    <ProductsListItem
                    name="iPhone X"
                    description="This is iPhone X"
                    type="phone"
                    capacity="64Gb"
                    price="800"
                    
                    />
                        
                </div>
                <div className="col-lg-6">
                    <ProductsListItem
                    name="iPhone 12"
                    description="This is iPhone 12"
                    type="phone"
                    capacity="256 Gb"
                    price="500"
                    />
                </div>
                <div className="col-lg-6">
                    <ProductsListItem
                    name="iPhone XS"
                    description="This is iPhone XS"
                    type="phone"
                    capacity="128 Gb"
                    price="400"
                    />
                </div>
                <div className="col-lg-6">
                    <ProductsListItem
                    name="iPhone 8 plus"
                    description="This is iPhone 8 plus"
                    type="phone"
                    capacity="64 Gb"
                    price="300"
                    />
                </div>
        </div>
        </>
    )
    
}

export default ProductsList