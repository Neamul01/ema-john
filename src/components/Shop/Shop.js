import React, { useEffect, useState } from 'react';
import Cart from './Cart/Cart';
import Product from './Product/Product';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([])

    useEffect(() => {
        fetch('products.json').then(res => res.json()).then(data => setProducts(data))
    }, []);

    let newBalance = 0;
    const addToCart = (product) => {
        const { price } = product;
        const newCart = [...cart, product];
        setCart(newCart);

        newBalance = newBalance + (+price);
    }
    console.log(newBalance)


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
                <Cart
                    cart={cart}
                    newBalance={newBalance}
                ></Cart>
            </div>
        </div>
    );
};

export default Shop;