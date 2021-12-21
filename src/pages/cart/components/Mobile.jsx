import React from "react";
import "./Mobile.css";
import { Link } from "react-router-dom";

const Mobile = ({ brand, id, imgUrl, model, price }) => {
    return (
        <Link
            to={`/product/${id}`}
            className="productBox"
        >
            <img
                className="productBoxImage"
                alt={model}
                src={imgUrl}
                loading="lazy"
            />
            <div className="info">
                <p className="brand">{brand}</p>
                <p className="model">{model}</p>
                {price ? (
                    <p className="price">{price} €</p>
                ) : (
                    <p className={"sold-out"}>SOLD OUT</p>
                )}
            </div>
        </Link>
    );
};

export default Mobile;