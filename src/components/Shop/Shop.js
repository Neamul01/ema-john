import React, { useEffect, useState } from 'react';
import { addToDb, getShoppingCart } from '../../utilities/fakedb';
import Cart from './Cart/Cart';
import Product from './Product/Product';
import useProducts from '../../hooks/useProducts';
import './Shop.css'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faRemove } from '@fortawesome/free-solid-svg-icons';

const Shop = () => {
    const [products, setProducts] = useProducts();
    const [cart, setCart] = useState([])


    useEffect(() => {
        const storedCart = getShoppingCart();
        const savedCart = [];
        for (const id in storedCart) {
            const addedProduct = products.find(product => product.id === id);
            if (addedProduct) {
                addedProduct.quantity = storedCart[id];
                savedCart.push(addedProduct)
            }
        }
        setCart(savedCart)
    }, [products])

    const addToCart = (selectedProduct) => {
        let newCart = [];
        const exists = cart.find(product => product.id === selectedProduct.id);
        if (!exists) {
            selectedProduct.quantity = 1
            newCart = [...cart, selectedProduct];
        }
        else {
            const rest = cart.filter(product => product.id !== selectedProduct.id);
            exists.quantity += 1;
            newCart = [...rest, exists];
        }


        setCart(newCart);
        addToDb(selectedProduct.id);
    }


    return (
        <div className='shop-container'>
            <div className="product-container">
                {
                    products.map(product => <Product
                        className='product-container'
                        product={product}
                        key={product.id}
                        addToCart={addToCart}

                    ></Product>)
                }

            </div>
            <div className="cart-container">
                <Cart cart={cart}>
                    <button className='cart-clear-btn'><span>Clear Cart</span><FontAwesomeIcon icon={faRemove}></FontAwesomeIcon></button>
                    <Link to='/review'><button className='cart-review-btn'><span>Review Order</span><FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon></button></Link>
                </Cart>
            </div>
        </div>
    );
};

export default Shop;