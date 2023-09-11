import React from 'react';
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';
import {useAuthState} from 'react-firebase-hooks/auth';
import auth  from '../../firebase.init.js';


const AddProduct = () => {
    const { register, handleSubmit, reset } = useForm();
    const [user] = useAuthState(auth);
    const onSubmit = data => {
        console.log(data)
        const url =" https://inventory-server-v41p.onrender.com//product";
        fetch(url,{
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(result =>{
            console.log(result);
            toast('product added')
        })
    
    };
    return (
        <div className='w-50 mx-auto'>
        <h2> Add a product</h2>
        <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
            <input className='mb-2 ps-2' placeholder='name' {...register("name", { required: true, maxLength: 20 })} />
            <textarea className='mb-2 ps-2' placeholder='Description' {...register("description")} />
            <input className='mb-2 ps-2' placeholder='Price' type="number" {...register("price")} />
            <input defaultValue={user.email} className='mb-2 ps-2' placeholder='Email' type="email" {...register("email")} />
            <input defaultValue={user?.displayName} className='mb-2 ps-2' placeholder='Supplier' type="text" {...register("supplier")} />
            <input className='mb-2 ps-2' placeholder='Quantity' type="number" {...register("quantity")} />
            <input className='mb-2 ps-2' placeholder='Photo Url' type="text" {...register("img")} />
            <input className='w-50 mx-auto' type='submit' value="Add Product" />
        </form>
    </div>
    );
};

export default AddProduct;
