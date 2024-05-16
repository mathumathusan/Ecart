import { Typography, Card, CardContent, CardMedia, Grid } from "@mui/material";
import React from "react";
import "./App.css"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Cart from "./Cart"




function App() {
 

  return (
<>
<BrowserRouter>
<Routes>
  <Route path="/" element={<Home/>}/>
  <Route path="/cart" element={<Cart/>} />
</Routes>
</BrowserRouter>
</>
  );
}

export default App;
