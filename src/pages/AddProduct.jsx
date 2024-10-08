import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddProduct = () => {
    let navigate = useNavigate();

    const [title , setTitle] = useState('');
    const [price , setPrice] = useState(0);
    const [description , setDescription] = useState('');

    const formSubmit = (e) => {
        e.preventDefault()

        fetch('https://fakestoreapi.com/products',{
            method:"POST",
            headers: {
                "Content-Type" : "Application/json",
            },
            body:JSON.stringify(
                {
                    title: title,
                    price: price,
                    description: description
                }
            )
        })
            .then(res=>res.json())
            .then(data=>{
                console.log(data)
                navigate('/products')
            })
    }
    return (
    <>
    <h1>Add Product</h1>
    <form onSubmit={formSubmit} style={{width:"360px",margin:'0 auto',marginTop: '70px'}}>
        <div className="mb-3">
            <label htmlFor="ProductTitle" className="form-label">Title</label>
            <input onChange={(e) => {setTitle(e.target.value)}} type="text" className="form-control" id="ProductTitle" placeholder='Product Title' aria-describedby="Product title" />
        </div>
        <div className="mb-3">
            <label htmlFor="ProductPrice" className="form-label">Price</label>
            <input onChange={(e) => {setPrice(e.target.value)}} type="number" className="form-control" id="ProductPrice" placeholder='Product Price' aria-describedby="Product price" />
        </div>
        <div className="mb-3">
            <label htmlFor="ProductDescription" className="form-label">Description</label>
            <input onChange={(e) => {setDescription(e.target.value)}} type="text" className="form-control" id="ProductDescription" placeholder='Product Description' aria-describedby="Product price" />
        </div>
        <button type="submit" className="btn btn-primary">Add Product</button>
    </form>
    </>
    )
}

export default AddProduct;