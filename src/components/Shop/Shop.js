import React, { useEffect, useState } from 'react';
import Product from './Product/Product';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([])

    useEffect(() => {
        fetch('products.json').then(res => res.json()).then(data => setProducts(data))
    }, []);

    // let newBalance;
    const addToCart = (product) => {
        const { price } = product;
        console.log(product.price, price)
        const newCart = [...cart, product];
        setCart(newCart);
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
                <h2>This is cart container</h2>
                <h3>Selected Items: {cart.length}</h3>
                {/* <h3>Balance:{newBalance}</h3> */}
            </div>
        </div>
    );
};

export default Shop;