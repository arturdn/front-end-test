import React, { useEffect, useState, useRef } from "react";
import "./Cart.css";

import getProductsFromDbFirstOrApi from "../../services/cartServices";

import Item from "./components/Item/Item";
import Searcher from "./components/Searcher/Searcher";
import { Typography } from "@mui/material";

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
        <Typography variant="h5" color="primary.dark">
          Mobile Catalog
        </Typography>
        <Searcher defaultProducts={productsList.current} onChange={setCart} />
      </div>
      {cart?.length && cart.length !== 0 ? (
        <div className="cartList">
          {cart.map((item) => (
            <Item props={item} key={item.id} />
          ))}
        </div>
      ) : (
        <p>No Products Available</p>
      )}
    </div>
  );
};

export default Cart;
