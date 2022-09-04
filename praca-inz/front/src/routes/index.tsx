import { Routes, Route } from "react-router-dom";
import CarsPage from "../pages/CarsPage";
import Login from "../components/Header/Authorization/Login";
import Register from "../components/Header/Authorization/Register";
import Home from "../pages/Home/Home";
import PolandInfo from "../pages/PolandInfo";
import WorldInfo from "../pages/WorldInfo";
import PartsPage from "../pages/PartsPage";
import DealersPage from "../pages/DealersPage";
import ConfigurationPage from "../pages/ConfigurationPage";

const routes = (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/cars" element={<CarsPage />} />
    <Route path="/login" element={<Login />} />
    <Route path="/register" element={<Register />} />
    <Route path="/poland" element={<PolandInfo />} />
    <Route path="/world" element={<WorldInfo />} />
    <Route path="/parts" element={<PartsPage />} />
    <Route path="/dealers" element={<DealersPage />} />
    <Route path="/configurations" element={<ConfigurationPage />} />
  </Routes>
);

export default routes;
