import React from 'react';
import './ReviewItem.css'

const ReviewItem = ({ product }) => {
    const { name, price, shipping, quantity } = product;
    return (
        <div className='review-item'>
            <h2>this is a review item {name}:</h2>
        </div>
    );
};

export default ReviewItem;