import React, { useEffect, useState } from "react";
import "./Product.css";
import { useParams } from "react-router";

import getProductFromDbOrApi from "../../services/productServices";
import Actions from "./actions/Actions";
import Specifications from "./specifications/Specifications";
import CloseIcon from "@mui/icons-material/Close";
import { Link } from "react-router-dom";
import { Divider, Typography } from "@mui/material";

const Product = ({ db }) => {
  const { id } = useParams();
  const [product, setProduct] = useState([]);

  useEffect(async () => {
    const productData = await getProductFromDbOrApi(db, id);
    setProduct(productData);
  }, []);

  return (
    <div className="detailsContainer">
      <Link className="closeDetails" to="/">
        <CloseIcon color="primary" />
      </Link>
      <img className="detailsImage" alt={product.model} src={product.imgUrl} />
      <div className="detailsInfo">
        <Typography variant="h5" color="primary.dark">
          {product.brand} - {product.model}
        </Typography>
        {product.price ? (
          <Typography variant="h5" fontWeight="600" color="primary.dark">
            € {product.price}
          </Typography>
        ) : (
          <Typography variant="h5" color="secondary.dark">
            SOLD OUT
          </Typography>
        )}
        <Divider sx={{ mt: 2 }} />
        <Actions product={product} />
        <Specifications product={product} />
      </div>
    </div>
  );
};

export default Product;
