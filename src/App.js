import logo from './logo.svg';
import './App.css';
import NavBar from "./components/Navbar";
import {Route, Routes} from "react-router-dom";
import Home from "./components/Home";
import AddProduct from "./components/AddProduct";
import EditProduct from "./components/EditProduct";
import React from "react";


function App() {
  return (
      <>
        <NavBar />
        <Routes>
          <Route  exact path="/" element={<Home />} />
          <Route  exact path="/add" element={<AddProduct />} />
          <Route  exact path="/editProduct/:id" element={<EditProduct />} />
        </Routes>
      </>

  );
}

export default App;
