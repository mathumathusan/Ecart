import React from "react";
import { useLocation } from "react-router-dom";
import { Card, CardContent, CardMedia, Typography, Button } from "@mui/material";

import "./product.css"

function Product() {
  const location = useLocation();
  const { product } = location.state;

  return (
    <div className="product-detail-container">
      <Card>
        <CardMedia
          component="img"
          height="500"
          image={product.image}
          alt={product.name}
        />
        <CardContent>
          <Typography variant="h4">{product.name}</Typography>
          <Typography variant="body1" color="textSecondary" paragraph>
            {product.description}
          </Typography>
          <Typography variant="h5" color="primary">
            ${product.price}
          </Typography>
          <Button variant="contained" color="primary">
            Add to Cart
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}

export default Product;
