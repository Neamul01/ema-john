import React from 'react';
import './Product.css'

const Product = ({ addToCart, product }) => {
    const { img, name, price, seller, ratingsCount } = product;
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
                        <h5><small>Rating: {ratingsCount}</small></h5>
                    </div>
                </div>
                <button onClick={() => addToCart(product)} className='cart-add'>
                    <p>Add To Cart</p>
                </button>
            </div>

        </div>
    );
};

export default Product;