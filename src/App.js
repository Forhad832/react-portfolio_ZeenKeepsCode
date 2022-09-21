import React from "react";
import {
  BrowserRouter, Route, Routes
} from "react-router-dom";

import Home from "./compnents/home/Home";
import Navbar from "./compnents/Navbar/Navbar";
function App() {
  return (
   <BrowserRouter>
   <Navbar />
    <Routes>
      <Route path="/" element={<Home />}></Route>
    </Routes>
   </BrowserRouter>
  );
}

export default App;
