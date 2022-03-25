import { faRemove } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Cart.css'

const Cart = ({ cart, newBalance }) => {
    return (
        <div>
            <div className="cart-summary">
                <h2>Order Summery</h2>
            </div>
            <div className='side-cart-details'>
                <p>Selected Items: {cart.length}</p>
                <p>Total Price:{newBalance}</p>
                <p>Total Shipping Charge:</p>
                <p>Tax:</p>
                <h3>Grand Total:</h3>
            </div>

            <div className="side-cart-buttons">
                <button className='cart-clear-btn'>Clear Cart<FontAwesomeIcon icon={faRemove}></FontAwesomeIcon></button>
                <button className='cart-review-btn'>Review Order</button>
            </div>
        </div>
    );
};

export default Cart;