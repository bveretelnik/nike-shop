import React from "react";
import Grid from "@material-ui/core/Grid";

import Product from "./Product/Product";
import useStyles from "./styles";

const products = [
  { id: 1, name: "Nike", description: "shoes", price: "5" },
  { id: 2, name: "Nike1", description: "shoes1", price: "10" },
  { id: 3, name: "Nike2", description: "shoes2", price: "15" },
  { id: 4, name: "Nike3", description: "shoes3", price: "20" },
  { id: 5, name: "Nike4", description: "shoes4", price: "25" },
  { id: 6, name: "Nike5", description: "shoes5", price: "30" },
];

function Products() {
  const classes = useStyles();
  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      <Grid container justify="center" spacing={4}>
        {products.map((product) => (
          <Grid key={product.id} item xs={12} sm={6} md={4} lg={3}>
            <Product product={product} />
          </Grid>
        ))}
      </Grid>
    </main>
  );
}

export default Products;
