import Cuisine from "./Cuisine";
import Home from "./Home";
import { Routes, Route } from "react-router-dom";
import Searched from "./Searched";

const Pages = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cuisine/:type" element={<Cuisine />} />
      <Route path="/search/:search" element={<Searched />} />
    </Routes>
  );
};

export default Pages;
