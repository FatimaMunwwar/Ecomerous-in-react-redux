import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nabvar from "./Component/Nabvar";
import Home from "./Component/Home";
import Product from "./Component/Product";
import Cart from "./Component/Cart";

function App() {
  return (
    <>
      <Router>
        <Nabvar />
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="/Product" element={<Product />} />
          <Route path="/Cart" element={<Cart />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
