import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import "./ProductDetail.css";
import { FaStar } from "react-icons/fa";
import { FiMinus } from "react-icons/fi";
import { FaPlus } from "react-icons/fa";
import { IoArrowBackOutline } from "react-icons/io5";

function ProductDetail({ addToCart }) {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [quantity, setQuantity] = useState(1); // Initialize quantity state

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${id}`)
            .then(res => res.json())
            .then(data => setProduct(data))
            .catch(error => console.error("Error fetching products:", error));
    }, [id]);

    if (!product) return null;

    return (
        <div className="productDetail">
            <Link className="backLink" to='/'> <IoArrowBackOutline />Back to products</Link>
            <img src={product.image} alt={product.title} />
            <div className="prdDttls">
                <h1>{product.title}</h1>
                <div className='productRate'>
                    <FaStar className='goldStar' />
                    <span className='rateStar'> {product.rating.rate}</span>
                    <span className='count'>({product.rating.count} reviews)</span>
                </div>
                <h2>Price: ${product.price}</h2>
                <p className='productDesc'>{product.description}</p>
                <p>Category: {product.category}</p>
                <div className="bttns">
                    <div className="quantities">
                        <button onClick={() => setQuantity(quantity > 1 ? quantity - 1 : 1)}><FiMinus /></button>
                        <span>{quantity}</span>
                        <button onClick={() => setQuantity(quantity + 1)}><FaPlus /></button>
                    </div>
                    <button onClick={() => { addToCart({ ...product, quantity }) }}>Add to Cart</button>
                </div>
            </div>
        </div>
    );
}

export default ProductDetail;
