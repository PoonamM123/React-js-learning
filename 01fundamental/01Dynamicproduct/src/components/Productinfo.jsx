import React from "react"
const ProductInfo=()=>{
    const products = [
        {
            name: "Laptop",
            price: 1200,
            availability: "In stock",
        },
        {
            name: "Laptop",
            price: 1200,
            availability: "In stock",
        },
        {
            name: "Laptop",
            price: 1200,
            availability: "In stock",
        },
    ]

    return (
        <div>
            {
                products.map((product)=>(
                    <ul key={Math.random()} >
                        <li>{product.name}</li>
                        <li>${product.price}</li>
                        <li>{product.availability}</li>
                    </ul>
                ))
            }
        </div>
    )
}

export default ProductInfo
