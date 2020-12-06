import { Routes, Route, useLocation } from "react-router-dom";
import { ToastProvider } from "react-toast-notifications";
import { useGlobalContext } from "./GlobalState/GlobalState";

import "./App.css";

// components
import NavBar from "./Components/Navbar/NavBar";
import ProductHome from "./Components/ProductHome/ProductHome";
import ProductDetail from "./Components/ProductDetail/ProductDetail";
import Toast from "./Components/Toast/Toast";

// Pages
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Product from "./Pages/Product/Product";
import Cart from "./Pages/Cart/Cart";

function NotFound() {
  return (
    <div>
      <h1>Oops Page not found!</h1>
    </div>
  );
}

function App() {
  let location = useLocation();
  const { toastMsg, toastType, isToastOpen } = useGlobalContext();
  return (
    <>
      <ToastProvider>
        <div className="App">
          <NavBar location={location} />
          <Toast
            msg={toastMsg}
            toastType={toastType}
            isToastOpen={isToastOpen}
          />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="products" element={<Product />}>
              <Route path="/" element={<ProductHome />} />
              <Route path="productdetail/:id" element={<ProductDetail />} />
            </Route>
            <Route path="cart" element={<Cart />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </ToastProvider>
    </>
  );
}

export default App;
