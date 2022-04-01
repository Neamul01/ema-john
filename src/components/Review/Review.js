import { faArrowRight, faRemove } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import useCart from '../../hooks/useCart';
import useProducts from '../../hooks/useProducts';
import { removeFromDb } from '../../utilities/fakedb';
import Cart from '../Shop/Cart/Cart'
import ReviewItem from './ReviewItem/ReviewItem';
import './Review.css'
import { useNavigate } from 'react-router-dom';

const Review = () => {
    const [products, setProducts] = useProducts();
    const [cart, setCart] = useCart(products);
    const navigate = useNavigate()

    const handleRemoveProduct = product => {
        const rest = cart.filter(pd => pd.id !== product.id);
        setCart(rest);
        removeFromDb(product.id)
    }
    return (
        <div>
            <div className="shop-container">
                <div className="review-item-container">
                    {
                        cart.map(product => <ReviewItem
                            key={product.id}
                            product={product}
                            handleRemoveProduct={handleRemoveProduct}
                        ></ReviewItem>)
                    }
                </div>
                <div className="cart-container">
                    <Cart cart={cart}>

                        <button className='cart-clear-btn'><span>Clear Cart</span><FontAwesomeIcon icon={faRemove}></FontAwesomeIcon></button>
                        <button onClick={() => navigate('/inventory')} className='cart-review-btn'><span>Proceed Checkout</span><FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon></button>
                    </Cart>
                </div>
            </div>
        </div>
    );
};

export default Review;