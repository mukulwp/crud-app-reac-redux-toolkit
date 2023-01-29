import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Error from "../Pages/Error";
import Home from "../Pages/Home";
import Navbar from "../layouts/Navbar";
import AddBook from "../features/Books/AddBook";
import ViewBooks from "../features/Books/ViewBooks";
import EditBook from "../features/Books/EditBook";

const Index = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/add" element={<AddBook />}></Route>
        <Route path="/show" element={<ViewBooks />}></Route>
        <Route path="/edit" element={<EditBook />}></Route>
        <Route path="*" element={<Error />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Index;
