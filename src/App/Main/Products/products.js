

const products = [
    {
        id:1,
        name:"iPhone X",
        //description:"This is iPhone X",
        type:"phone",
        capacity:128,
        price:4000,
        image:"/images/ipad.png"
    },
    {
        id:2,
        name:"iPhone 12",
        description:"This is iPhone 12",
        type:"phone",
        capacity:128,
        price:1600,
        image:"/images/iphone.png"
    },
    {
        id:3,
        name:"iPhone XS",
        description:"This is iPhone XS",
        type:"phone",
        capacity:128,
        price:800,
        image:"/images/iphone.png"
    },
    {
        id:4,
        name:"iPhone 8",
        description:"This is iPhone 8",
        type:"phone",
        capacity:128,
        price:500,
        image:"/images/ipad.png"
    },
]

export const getProductsObj = (array) => array.reduce((obj, product) => ({
    ...obj,
    [product.id]: product
}), {})




export default products