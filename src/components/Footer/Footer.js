import { Container, Link, Typography } from "@material-ui/core";
import React from "react";

import useStyles from "./styles";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary">
      {"Copyright © "}
      <Link color="inherit" href="https://github.com/bveretelnik">
        My GitHub
      </Link>
      {"."}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

function Footer() {
  const classes = useStyles();
  return (
    <>
      <footer className={classes.footer}>
        <Container maxWidth="sm">
          <Typography variant="body1">
            My sticky footer can be found here.
          </Typography>
          <Copyright />
        </Container>
      </footer>
    </>
  );
}

export default Footer;
