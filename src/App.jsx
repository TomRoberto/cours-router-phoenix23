import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Details from "./pages/Details";
import Offer from "./pages/Offer";

import Header from "./components/Header";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details" element={<Details />} />
        <Route path="/offer/:id" element={<Offer />} />
        <Route path="*" element={<p>All</p>} />
      </Routes>
    </Router>
  );
}

export default App;
