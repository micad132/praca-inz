import { Routes, Route, Link } from "react-router-dom";
import Home from "../components/Home/Home.js";
import Cars from "../components/Cars/Cars.js";

const routes = (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/cars" element={<Cars />} />
  </Routes>
);

export default routes;
