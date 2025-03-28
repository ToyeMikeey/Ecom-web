import React from 'react';
import { Link } from 'react-router-dom';
import "./ProductCard.css";
import { FaStar } from "react-icons/fa";
import { PiShoppingCartSimpleLight } from "react-icons/pi";


function ProductCard({ product, addToCart }) {
    return (
        <div className="productCard">
            <Link to={`/product/${product.id}`} className="productLink"> 

                <img src={product.image} alt={product.title} />
                <div className='productRate'> 
                    <FaStar className='goldStar' />
                    <span className='rateStar'> {product.rating.rate}</span>
                    <span className='count'>({product.rating.count} reviews)</span>
                </div>
                <h3>{product.title}</h3>
                <p className='productDesc'>{product.description}</p>
                <p className='productPrice'>${product.price}</p>
            </Link>
            <button onClick={()=>{addToCart(product)}}> <PiShoppingCartSimpleLight /> Add to Cart</button>
        </div>

    );
}

export default ProductCard;
