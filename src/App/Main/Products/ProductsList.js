import React from 'react'
import ProductsListItem from './ProductsListItem'
import products from './products'



const ProductsList = ({}) => {
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
                            price
                        }) => (
                            <div className="col-lg-6" key={id}>
                                <ProductsListItem
                                    name={name}
                                    description={description}
                                    type={type}
                                    capacity={capacity}
                                    price={price}
                                />     
                            </div>
                        ))
                    }
            </div>
        </>
    )
    
}

export default ProductsList