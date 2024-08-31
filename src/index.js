import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import DisplayCategory from "./components/DisplayCategory";
import { Provider } from "react-redux";
import store from "./redux/store";
import Cart from "./pages/Cart";
import Shopping from "./pages/Shopping";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/display' element={<DisplayCategory />} />
        <Route path='/shoppingcart' element={<Cart />} />
        <Route path='/shop' element={<Shopping />} />
      </Routes>
    </BrowserRouter>
  </Provider>,
);
