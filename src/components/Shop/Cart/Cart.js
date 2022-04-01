import { faArrowRight, faRemove } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Cart.css'

const Cart = ({ cart, children }) => {

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

    console.log(children)
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
                {children}
            </div>
        </div>
    );
};

export default Cart;