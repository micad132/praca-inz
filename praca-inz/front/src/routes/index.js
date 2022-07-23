import { Routes, Route, Link } from "react-router-dom";
import Home from "../components/Home/Home.js";
import Cars from "../components/Cars/Cars.js";
import Login from "../components/Header/Authorization/Login.js";
import Register from "../components/Header/Authorization/Register.js";

const routes = (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/cars" element={<Cars />} />
    <Route path="/login" element={<Login />} />
    <Route path="/register" element={<Register />} />
  </Routes>
);

export default routes;
