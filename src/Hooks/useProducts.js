import { useEffect, useState } from "react";

const useProducts = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://inventory-server-v41p.onrender.com//product')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);
    return [products, setProducts]
}   

export default useProducts;