import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProductDashboard from "./components/ProductDashboard/ProductDashboard.js";
import ShoppingCart from "./components/ShoppingCart/ShoppingCart.js";
import Checkout from "./components/Checkout/Checkout.js";
import HomePage from "./components/HomePage/HomePage";
import NotFound from "./components/NotFound/NotFound.js";
import Header from "./components/Header/Header.js";
import AdminRoute from "./components/AdminRoute.js";
import PrivateRoute from "./components/PrivateRoute.js"
import SignIn from "./components/HomePage/SignIn.js";
import SignUp from "./components/HomePage/SignUp.js";

function App() {
  return (
    <div className="App">
      <Router>
      <Header />
        <div>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/dashboard" element={<AdminRoute element={<ProductDashboard />}/>} />
            <Route path="/cart" element={<PrivateRoute element={<ShoppingCart />} />} /> 
            <Route path="/checkout" element={<PrivateRoute element={<Checkout />} />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
          </Routes>
        </div>

        </Router>
    </div>
  );
}

export default App;
