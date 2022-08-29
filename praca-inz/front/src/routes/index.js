import { Routes, Route, Link } from "react-router-dom";
import Cars from "../components/Cars/Cars.tsx";
import Login from "../components/Header/Authorization/Login.tsx";
import Register from "../components/Header/Authorization/Register.tsx";
import Home from "../pages/Home/Home";

const routes = (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/cars" element={<Cars />} />
    <Route path="/login" element={<Login />} />
    <Route path="/register" element={<Register />} />
  </Routes>
);

export default routes;
