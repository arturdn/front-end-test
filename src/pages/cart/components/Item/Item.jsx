import React from "react";
import { useDispatch } from "react-redux";
import Card from "@mui/material/Card";
import addToCart from "../../../../services/addToCartServices";
import { Typography, IconButton } from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import "./Item.css";
import { Link } from "react-router-dom";
import { increment } from "../../../../redux/features/cartCounter/cartCounterSlice";
import { getProductFromApi } from "../../../../services/productServices";

const Item = ({ props }) => {
  const { brand, id, imgUrl, model, price } = props;
  const dispatch = useDispatch();

  const handleAddToCart = async (e) => {
    e.stopPropagation();
    e.preventDefault();

    if (price) {
      const productData = await getProductFromApi(id);
      const response = await addToCart({
        id: id,
        colorCode: productData.options.colors[0].code,
        storageCode: productData.options.storages[0].code,
      });
      dispatch(increment(response));
    } else {
      alert("Sorry, this product is not yet available");
    }
  };

  return (
    <Link to={`/product/${id}`} className="productBox">
      <Card className="cardContent">
        <img
          className="productBoxImage"
          alt={model}
          src={imgUrl}
          loading="lazy"
        />
        <div className="cardContent__Info">
          <div className="cardContent__Info__text">
            <Typography
              variant="subtitle2"
              color="primary.dark"
              sx={{ textTransform: "uppercase" }}
            >
              {brand}
            </Typography>
            <Typography variant="body2" color="primary.dark">
              {model}
            </Typography>
            {price ? (
              <Typography variant="h5" color="secondary.dark" fontWeight={600}>
                {price} €
              </Typography>
            ) : (
              <Typography variant="body1" color="error" sx={{ mt: 0.6 }}>
                SOLD OUT
              </Typography>
            )}
          </div>
          <div className="cardContent__Info__button">
            <IconButton
              color="primary"
              aria-label="add to shopping cart"
              sx={{ backgroundColor: "#bdf1ed" }}
              onClick={handleAddToCart}
            >
              <AddShoppingCartIcon />
            </IconButton>
          </div>
        </div>
      </Card>
    </Link>
  );
};

export default Item;
