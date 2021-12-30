import { React } from "react";
import "./Header.css";

import { Link } from "react-router-dom";
import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import { IconButton, Badge } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import { useSelector } from "react-redux";

const Header = () => {
  const cartItems = useSelector((state) => state.cartReducer.value);

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
