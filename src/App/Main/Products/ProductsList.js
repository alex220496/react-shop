import React from 'react'
import ProductsListItem from './ProductsListItem'
import products from './products'



const ProductsList = () => {
    return(
        <>
            <h1 className="page-title">Products</h1>
            <div className="row">  
                    {
                        products.map(products => (
                            <div className="col-lg-6" key={products.id}>
                                <ProductsListItem
                                    name={products.name}
                                    description={products.description}
                                    type={products.type}
                                    capacity={products.capacity}
                                    price={products.price}
                                />     
                            </div>
                        ))
                    }
            </div>
        </>
    )
    
}

export default ProductsList