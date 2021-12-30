import React, { useEffect, useState } from "react";
import "./Product.css";
import { useParams } from "react-router";

import getProductFromDbOrApi from "../../services/productServices";
import Actions from "./actions/Actions";
import Info from "./info/Info";
import Specifications from "./specifications/Specifications";
import CloseIcon from "../../layout/icons/CloseIcon";
import { Link } from "react-router-dom";

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
        <CloseIcon />
      </Link>
      <img className="detailsImage" alt={product.model} src={product.imgUrl} />
      <div className="detailsInfo">
        <Info
          brand={product.brand}
          model={product.model}
          price={product.price}
        />
        <Specifications
          displaySize={product.displaySize}
          dimentions={product.dimentions}
          battery={product.battery}
          cpu={product.cpu}
          weight={product.weight}
          os={product.os}
          primaryCamera={product.primaryCamera}
          ram={product.ram}
          bluetooth={product.bluetooth}
          secondaryCamera={product.secondaryCmera}
        />
        <Actions
          productId={product.id}
          colors={product.colors}
          internalMemory={product.internalMemory}
        />
      </div>
    </div>
  );
};

export default Product;
