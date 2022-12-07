import { Routes, Route } from "react-router-dom";
import CarsPage from "../pages/CarsPage";
import Login from "../components/Header/Authorization/Login";
import Register from "../components/Header/Authorization/Register";
import Home from "../pages/Home/Home";
import NewsPage from "../pages/NewsPage";
import PartsPage from "../pages/PartsPage";
import DealersPage from "../pages/DealersPage";
import ConfigurationPage from "../pages/OrdersPage";
import ProfilePage from "../pages/ProfilePage";
import CommercialsPage from "../pages/ProfilePage/CommercialsPage";
import AccountSettings from "../pages/ProfilePage/AccountSettings";
import ErrorPage from "../pages/ErrorPage";
import Opinions from "../components/Opinions/Opinions";
import CarmodelsPage from "../pages/ProfilePage/CarmodelsPage";
import SingleCarPage from "../components/SingleCarPage";
import ReviewPage from "../pages/ProfilePage/ReviewPage";
import SingleNewsPage from "../components/SingleNewsPage";
import ManageUsersPage from "../pages/ProfilePage/ManageUsersPage";

const routes = (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/cars">
        <Route index element={<CarsPage />} />
        <Route path=":carId" element={<SingleCarPage />} />
    </Route>
    <Route path="/login" element={<Login />} />
    <Route path="/register" element={<Register />} />
    <Route path="/news">
        <Route index element={<NewsPage/>} />
        <Route path=":postId" element={<SingleNewsPage />} />
    </Route>
    <Route path="/parts" element={<PartsPage />} />
    <Route path="/dealers" element={<DealersPage />} />
    <Route path="/configurations" element={<ConfigurationPage />} />
    <Route path="/profile" element={<ProfilePage />}>
        <Route path="commercials" element={<CommercialsPage />} />
        <Route path="settings" element={<AccountSettings />} />
        <Route path="carmodels" element={<CarmodelsPage />} />
        <Route path="reviews" element={<ReviewPage />} />
        <Route path="users" element={<ManageUsersPage />} />
    </Route>
    <Route path="/failed" element={<ErrorPage />} />
    <Route path="/opinions" element={<Opinions />} />
  </Routes>
);

export default routes;
