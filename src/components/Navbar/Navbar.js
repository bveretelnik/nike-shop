import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Badge,
  Button,
  MenuItem,
  Menu,
  Typography,
} from "@material-ui/core";
import { ShoppingCart } from "@material-ui/icons";
import FavoriteIcon from "@material-ui/icons/Favorite";

// import { Link, useLocation } from "react-router-dom";

import logo from "../../assets/nike-logo.png";
import useStyles from "./styles";

function Navbar() {
  const classes = useStyles();

  return (
    <>
      <AppBar position="fixed" className={classes.appBar} color="inherit">
        <Toolbar>
          <Typography
            // component={Link}
            // to="/"
            variant="h6"
            className={classes.title}
            color="inherit"
          >
            <img
              src={logo}
              alt="nike-logo"
              height="25px"
              className={classes.image}
            />{" "}
            Nike. Just Do It
          </Typography>
          <div className={classes.grow} />
          <div className={classes.buttonLink}>
            <Button color="inherit">Shoes</Button>
            <Button color="inherit">About us</Button>
            <Button color="inherit">Contact</Button>
          </div>
          <div className={classes.button}>
            <IconButton
              //   component={Link}
              //   to="/cart"
              aria-label="Show favorite items"
              color="inherit"
            >
              <Badge badgeContent={1} color="secondary">
                <FavoriteIcon />
              </Badge>
            </IconButton>
            <IconButton
              //   component={Link}
              //   to="/cart"
              aria-label="Show cart items"
              color="inherit"
            >
              <Badge badgeContent={2} color="secondary">
                <ShoppingCart />
              </Badge>
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default Navbar;
