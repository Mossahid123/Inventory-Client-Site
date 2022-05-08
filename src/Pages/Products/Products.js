import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Product from '../Product/Product';
import './Products.css';

const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://agile-ocean-37553.herokuapp.com/product')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <div id='products' className='container'>
                    <h1 className='products-title mt-5'>  My Inventory  </h1>
                    <div className="products-container">
                        {
                            products.slice(0, 6).map(product =>  <Product
                                key={product._id}
                                product={product}
                                >
                            </Product>) 
                        }
                    </div>
                    <Link to='/manage'> <button className='bg-dark text-white p-2 mt-5'>Manage Inventory</button> </Link>
            </div>
    );
};

export default Products;