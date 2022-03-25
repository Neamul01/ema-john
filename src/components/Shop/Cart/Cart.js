import { faArrowRight, faRemove } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Cart.css'

const Cart = ({ cart }) => {

    let total = 0;
    let shipping = 0;
    let quantity = 0;

    for (const product of cart) {
        quantity += (+product.quantity);
        total = total + product.price * product.quantity;
        shipping = shipping + product.shipping;
    }

    const tax = Number((total * 0.1).toFixed(2));
    const grandTotal = total + shipping + tax;

    return (
        <div className='cart-sticky'>
            <div className="cart-summary">
                <h2>Order Summery</h2>
            </div>
            <div className='side-cart-details'>
                <p>Selected Items: ${quantity}</p>
                <p>Total Price: ${total}</p>
                <p>Total Shipping Charge: ${shipping}</p>
                <p>Tax: ${tax}</p>
                <h3>Grand Total: {grandTotal.toFixed(2)}</h3>
            </div>

            <div className="side-cart-buttons">
                <button className='cart-clear-btn'><span>Clear Cart</span><FontAwesomeIcon icon={faRemove}></FontAwesomeIcon></button>
                <button className='cart-review-btn'><span>Review Order</span><FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon></button>
            </div>
        </div>
    );
};

export default Cart;