import React from "react";
import { Typography, Card, CardContent, CardMedia, Grid } from "@mui/material";
import { useLocation } from "react-router-dom";

function Cart() {
  const location = useLocation();
  const cart = location.state;

  
  const totalAmount = cart.reduce((total, item) => total + item.price, 0);

  return (
    <div className="container">
      <Typography variant="h3" mt={2} className="cartHeading">
        Your  Products Cart
      </Typography>
      <Grid container spacing={2} mt={2}>
        {cart.map((item, index) => (
          <Grid item xs={12} key={index}>
            <Card>
              <CardContent>
                <Typography gutterBottom variant="h5">
                  {item.name}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Price: ${item.price}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      {/* Render total amount */}
      <Typography variant="h5" mt={2}>
        Total Amount: ${totalAmount.toFixed(2)}
      </Typography>
    </div>
  );
}

export default Cart;
