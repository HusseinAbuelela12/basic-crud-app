import React from 'react';
import { Link } from 'react-router-dom';

const AppSidebar = () => {
    return (
    <>
    <ul className='list-unstyled h-100'>
        <li>
            <Link className='text-decoration-none text-white' to="/products">Get All Products</Link>
        </li>
        <li>
            <a className='text-decoration-none text-white' href="/#">Get All Cateogries </a>
        </li>
    </ul>
    </>
    )
}

export default AppSidebar;