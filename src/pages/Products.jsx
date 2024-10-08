import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const Products = () => {
    const [products , setProducts] = useState([]); 

    const getAllProducts = () => {
        fetch(`https://fakestoreapi.com/products`)
            .then(res=>res.json())
            .then(data => setProducts(data))
    }

    const deleteProduct = (product) => {
        Swal.fire({
            title: `You are going to delete this product : ${product.title}`,
            showCancelButton: true ,
        }).then((data) => {
            if(data.isConfirmed) {
                fetch(`https://fakestoreapi.com/products/${product.id}`,{
                    method:"DELETE"
                })
                .then(res=>res.json())
                .then((data)=>{getAllProducts()})
            }
        })
    };

    useEffect(() => {
        getAllProducts()
    } ,[])

    return (
    <>
        <h1 className='p-4'>Products Page</h1>
        <Link to={'/products/add'} className='btn btn-success'>Add New Product</Link>
        <Table striped bordered hover className='mt-5'>
            <thead>
                <tr>
                <th>Id</th>
                <th>Title</th>
                <th>description</th>
                <th>Price</th>
                <th>Operations</th>
                </tr>
            </thead>
            <tbody>
                {products.map((product) => {
                    return (
                    <tr key={product.id}>
                        <td>{product.id}</td>
                        <td>{product.title.slice(0 , 40)}...</td>
                        <td>{product.description.slice(0 , 40)}...</td>
                        <td>{product.price}</td>
                        <td>
                            <button className='btn btn-danger btn-sm me-2'  onClick={() => deleteProduct(product)}>Delete</button>
                            <Link to={`/products/${product.id}`} className='btn btn-info btn-sm me-2'>View</Link>
                            <button className='btn btn-primary btn-sm me-2'>Edit</button>
                        </td>
                    </tr>
                    )
                })}
                
            </tbody>
        </Table>
    </>
    )
}

export default Products;