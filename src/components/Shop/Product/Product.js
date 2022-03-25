import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Product.css'

const Product = ({ addToCart, product }) => {
    const { img, name, price, seller, ratings } = product;
    return (
        <div className='single-product'>
            <div className="product-cart">
                <img src={img} alt="" />
                <div>
                    <div className='cart-text'>
                        <h2>{name}</h2>
                        <h3>Price: ${price}</h3>
                    </div>
                    <div className='cart-details'>
                        <p><small>Manufacturer: {seller}</small></p>
                        <h5><small>Rating: {ratings}</small></h5>
                    </div>
                </div>
                <button onClick={() => addToCart(product)} className='cart-add'>
                    <p>Add To Cart</p>
                    <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
                </button>
            </div>

        </div>
    );
};

export default Product;