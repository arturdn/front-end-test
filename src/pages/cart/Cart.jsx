import React, { useEffect, useState, useRef } from "react";
import "./Cart.css";

import getProductsFromDbFirstOrApi from '../../services/cartServices';

import Item from "./components/Item/Item";
import Searcher from "./components/Searcher/Searcher";

const Cart = ({ db }) => {
    const [cart, setCart] = useState([]);
    const productsList = useRef([]);

    useEffect(async () => {
        const cartProducts = await getProductsFromDbFirstOrApi(db);

        productsList.current = cartProducts;
        setCart(cartProducts);
    }, []);

    return (
        <div className="cartContainer">
            <div className="cartHeader">
                <h2>Mobile Catalog</h2>
                <Searcher
                    defaultProducts={productsList.current}
                    onChange={setCart}
                />
            </div>
            {cart.length !== 0 ? (<div className="cartList">
                {cart.map((item) => (
                    <Item
                        key={item.id}
                        brand={item.brand}
                        id={item.id}
                        imgUrl={item.imgUrl}
                        model={item.model}
                        price={item.price}
                    />
                ))}
            </div>) : (<p>No Products Available</p>)}
        </div>
    );
};

export default Cart;