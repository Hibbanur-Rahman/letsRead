import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import About from "./pages/About";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Footer from "./Components/Footer";
import Programs from "./pages/Programs";

const App = () => {
  return (
    <div className="app">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/programs" element={<Programs />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default App;