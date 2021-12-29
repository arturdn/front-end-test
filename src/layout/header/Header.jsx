import { React, useEffect, useState } from "react";
import "./Header.css";

import { Link } from "react-router-dom";
import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import { IconButton, Badge } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";

const Header = () => {
  const [cartItems, setCartItems] = useState(
    parseInt(sessionStorage.getItem("cartItems"), 10) || 0
  );

  const updateShoppingCart = (e) => {
    setCartItems((prevState) => prevState + e.detail.count);
  };

  useEffect(() => {
    window.addEventListener("addToBag", (e) => updateShoppingCart(e));

    return () => {
      window.removeEventListener("addToBag", (e) => updateShoppingCart(e));
    };
  }, []);

  return (
    <AppBar
      sx={{
        height: 65,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
      }}
    >
      <Toolbar>
        <Link to="/" className="logo">
          <PhoneIphoneIcon fontSize="large" color="action" />
          <Typography variant="h5" color="white" sx={{ ml: 1 }}>
            MOBILAND
          </Typography>
        </Link>
        <Box>
          <IconButton aria-label="show cart" color="inherit">
            <Badge badgeContent={cartItems} color="error">
              <ShoppingCartIcon />
            </Badge>
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
