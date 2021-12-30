import React from "react";
import { useState } from "react";
import Card from "@mui/material/Card";
import { Button, Typography } from "@mui/material";

import "./Item.css";
import { Link } from "react-router-dom";

const Item = ({ brand, id, imgUrl, model, price }) => {
  const [cardState, setcardState] = useState({
    raised: false,
    shadow: 1,
  });

  return (
    <Link to={`/product/${id}`} className="productBox">
      <Card
        onMouseOver={() => setcardState({ raised: true, shadow: 3 })}
        onMouseOut={() => setcardState({ raised: false, shadow: 1 })}
        raised={cardState.raised}
        zdepth={cardState.shadow}
        className="cardContent"
      >
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
          <div className="cartContent_Info_button">
            <Button variant="text">sfg</Button>
          </div>
        </div>
      </Card>
    </Link>
  );
};

export default Item;
