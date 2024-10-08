import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import "./productDetails.css";

const ProductDetails = () => {
    let {productID} = useParams();
    const [product,setProduct] = useState([]);
    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${productID}`)
            .then(res=>res.json())
            .then(data=>setProduct(data))
    }, [])
    return (
    <>
    <h1>Product Details {product.id}</h1>
    <div className="info">
        <img src={product.image} alt="image" />
        <p>Name Product : {product.title }</p>
        <p>The Description : {product.description}</p>
        <p>The Price : {product.price}</p>
    </div>
    </>
    )
}

export default ProductDetails;