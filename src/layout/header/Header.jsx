import { React, useEffect, useState } from "react";
import './Header.css';

import { Link } from "react-router-dom";
import CartIcon from "../icons/CartIcon";
import PhoneLogo from "../icons/PhoneLogo";

const Header = () => {
    const [cartItems, setCartItems] = useState(
        parseInt(sessionStorage.getItem('cartItems'), 10) || 0
    );

    const updateShoppingCart = (e) => {
        setCartItems((prevState) => prevState + e.detail.count);
    }

    useEffect(() => {
        window.addEventListener('addToBag', (e) => updateShoppingCart(e));

        return () => {
            window.removeEventListener('addToBag', (e) => updateShoppingCart(e));
        };
    }, []);

    return (
        <header className="header">
            <Link to="/" className="logo">
                <PhoneLogo />
                <span className="logoTitle">MOBILAND</span>
            </Link>
            <div className="shoppingCart">
                <CartIcon cartCount={cartItems} />
            </div>
        </header>
    );
};

export default Header;