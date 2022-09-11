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
import ProfilePage from "../pages/ProfilePage";
import CommercialsPage from "../pages/ProfilePage/CommercialsPage";
import AccountSettings from "../pages/ProfilePage/AccountSettings";

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
    <Route path="/profile" element={<ProfilePage />}>
        <Route path="commercials" element={<CommercialsPage />} />
        <Route path="settings" element={<AccountSettings />} />

    </Route>
  </Routes>
);

export default routes;
