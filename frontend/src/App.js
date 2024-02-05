import "./App.css";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Register from "./pages/Register";
function App() {
  return (
    <div className="flex flex-col font-[inter]">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<Product />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
