import React from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';

import "./Item.css";
import { Link } from "react-router-dom";

const Item = ({ brand, id, imgUrl, model, price }) => {
    return (
        <Link
            to={`/product/${id}`}
            className="productBox"
        >
            <Card>
                <CardActionArea>
                    <img
                        className="productBoxImage"
                        alt={model}
                        src={imgUrl}
                        loading="lazy"
                    />
                    <CardContent className="cardContentInfo">
                        <p className="brand">{brand}</p>
                        <p className="model">{model}</p>
                        {price ? (
                            <p className="price">{price} €</p>
                        ) : (
                            <p className={"sold-out"}>SOLD OUT</p>
                        )}
                    </CardContent>
                </CardActionArea>
            </Card>
        </Link>
    );
};

export default Item;