import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useProducts from '../../Hooks/useProducts';
import './ManageProducts.css';

const ManageProducts = () => {
    const [products, setProducts] = useProducts()
    const handleDelete = _id => {
        const proceed = window.confirm('Delete tha product !!')
        if (proceed) {
            const url = `https://inventory-server-v41p.onrender.com//product/${_id}`
            fetch(url, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    const remaining = products.filter(product => product._id !== _id)
                    setProducts(remaining)
                })

        }
    }
    return (

        <div id='products' className='container'>
            <div className="row ">
                <h1 className='products-title mt-5'>  My Inventory  </h1>
                <div className="products-container">
                    {
                        products.map(product =>
                            <div key={product._id}>
                                <Card style={{ width: '18rem', height: '40rem' }}>
                                    <Card.Img style={{ height: '300px' }} variant="top" src={product.img} />
                                    <Card.Body>
                                        <Card.Title>{product.name}</Card.Title>
                                        <p>
                                            Price: ${product.price}
                                        </p>
                                        <p>
                                            Supplier: {product.supplier}
                                        </p>
                                        <p>
                                            Quantity: {product.quantity}
                                        </p>
                                        <p>
                                            Descriptions: {product.description.slice(0, 20)}
                                        </p>
                                        <Link to={`/addproduct`}>
                                            <Button className='btn btn-primary m-2 '>Add new product </Button>
                                        </Link>
                                        <Button onClick={() => handleDelete(product._id)} className="btn btn-danger"   >Delete</Button>
                                    </Card.Body>
                                </Card></div>)}
                </div>
            </div>
        </div>);
};

export default ManageProducts;