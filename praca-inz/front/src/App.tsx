import "./App.css";
import Commercials from "./components/Commercials/Commercials";
import Layout from "./layout/Layout";
import routes from "./routes";
import {useEffect} from "react";
import ScrollToTop from "react-scroll-to-top";
import {fetchImagesThunk, getAllImages} from "./store/imageSlice";
import {useAppDispatch, useAppSelector} from "./utils/types/hooks";
import {fetchCarModelsThunk, getAllCarModels} from "./store/carModelSlice";
import {fetchUserDetailsThunk, getLoggedUser} from "./store/userSlice";
import Footer from "./components/Footer/Footer";
import {ToastContainer} from "react-toastify";
import {fetchAllReviewsForCarModels, fetchAllReviewsForNews} from "./store/reviewSlice";
import {fetchPartsThunk} from "./store/partSlice";
import {fetchOrdersThunk} from "./store/orderSlice";
import {fetchAlNewsThunk} from "./store/newsSlice";

function App() {

    const dispatch = useAppDispatch();
    // const commercials = useSelector(getAllCommercials);
    useEffect(() => {
        dispatch(fetchImagesThunk())
        dispatch(fetchCarModelsThunk())
        dispatch(fetchUserDetailsThunk())
        dispatch(fetchPartsThunk())
        dispatch(fetchOrdersThunk());
        dispatch(fetchAlNewsThunk());
        dispatch(fetchAllReviewsForCarModels())
        dispatch(fetchAllReviewsForNews())
    }, [dispatch]);
    // console.log('REKLAMY', commercials);
    const images = useAppSelector(getAllImages);
    const cars = useAppSelector(getAllCarModels)
    const userDetails = useAppSelector(getLoggedUser);

  return (
    <div className="App">
        <Layout>
            {routes}
            <ScrollToTop smooth top={80}/>
        </Layout>
        <Commercials />
        <ToastContainer />


    </div>
  );
}

export default App;
