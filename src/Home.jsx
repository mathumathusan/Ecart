import { Typography, Card, CardContent, CardMedia, Grid, Button } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import React, { useState } from "react";
import "./App.css";
import { Link, useNavigate} from "react-router-dom";
import Cart from "./Cart";


function Home() {
  const productsData = {
    products: [
      {
        id: 1,
        name: "Laptop",
        description:
          "Powerful laptop with Intel Core i7 processor, 16GB RAM, and 512GB SSD storage.",
        price: 1099.99,
        category: "Electronics",
        image: "https://www.asus.com/media/Odin/Websites/global/Series/24.png",
      },
      {
        id: 2,
        name: "Laptop",
        description:
          "Powerful laptop with Intel Core i7 processor, 16GB RAM, and 512GB SSD storage.",
        price: 99.99,
        category: "Electronics",
        image: "https://www.asus.com/media/Odin/Websites/global/Series/24.png",
      },
      {
        id: 3,
        name: "Laptop",
        description:
          "Powerful laptop with Intel Core i7 processor, 16GB RAM, and 512GB SSD storage.",
        price: 59.99,
        category: "Electronics",
        image: "https://www.asus.com/media/Odin/Websites/global/Series/24.png",
      },
      {
        id: 4,
        name: "Laptop",
        description:
          "Powerful laptop with Intel Core i7 processor, 16GB RAM, and 512GB SSD storage.",
        price: 69.99,
        category: "Electronics",
        image: "https://www.asus.com/media/Odin/Websites/global/Series/24.png",
      },
      {
        id: 5,
        name: "Laptop",
        description:
          "Powerful laptop with Intel Core i7 processor, 16GB RAM, and 512GB SSD storage.",
        price: 9.99,
        category: "Electronics",
        image: "https://www.asus.com/media/Odin/Websites/global/Series/24.png",
      },
    ],
  };

  const initialCounts = productsData.products.reduce((acc, product) => {
    acc[product.id] = 0;
    return acc;
  }, {});

  const [counts, setCounts] = useState(initialCounts);
  const [cart, setCart] = useState([]);

  const navigate= useNavigate();

  

  function increment(id) {
    setCounts((prevCounts) => ({
      ...prevCounts,
      [id]: prevCounts[id] + 1,
    }));
  }

  function decrement(id) {
    setCounts((prevCounts) => ({
      ...prevCounts,
      [id]: Math.max(prevCounts[id] - 1, 0),
    }));
  }

  function addToCart(product) {
    const updatedCart = [...cart];
    updatedCart.push(product);
    setCart(updatedCart);
  }
   

  function handleCart(){
        navigate("/cart",{state:cart})
  }




  return (
    <>
      <div className="container">
        <Typography variant="h3" mt={2} className="productHead">
          Products Details
        </Typography>
      
        <Button variant="contained" color="primary" startIcon={<ShoppingCartIcon />} onClick={handleCart}  >
          View Cart
        </Button>
       
       
        <Grid container spacing={3} mt={2}>
          {productsData.products.map((product) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
              <Card>
                <CardMedia
                  component="img"
                  className="image"
                  height="300"
                  image={product.image}
                  alt={product.name}
                />
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    {product.name}
                  </Typography>
                  <Card>
                    <CardContent className="counter">
                      <span onClick={() => decrement(product.id)}>-</span>
                      <p> {counts[product.id]} </p>
                      <span onClick={() => increment(product.id)}>+</span>
                    </CardContent>
                  </Card>
                  <Typography variant="h6" color="textPrimary" className="cart">
                    ${product.price}
                  </Typography>
                  <Typography> Total: ${product.price * counts[product.id]}</Typography>
                  <Button variant="contained" onClick={() => addToCart(product)}>
                    Add to Cart
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
        
      </div>
      
    </>
  );
}

export default Home;
