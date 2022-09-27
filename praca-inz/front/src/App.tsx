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

function App() {

    const dispatch = useAppDispatch();
    // const commercials = useSelector(getAllCommercials);
    useEffect(() => {
        console.log('wbilem');
        dispatch(fetchImagesThunk())
        dispatch(fetchCarModelsThunk())
        dispatch(fetchUserDetailsThunk())
    }, [dispatch]);
    // console.log('REKLAMY', commercials);
    const images = useAppSelector(getAllImages);
    const cars = useAppSelector(getAllCarModels)
    const userDetails = useAppSelector(getLoggedUser);
    console.log('OBRAZY', images);
    console.log('AUTA', cars);
    console.log('DANE USERA', userDetails);

  return (
    <div className="App">
        <Layout>
            {routes}
            <ScrollToTop smooth top={80}/>
        </Layout>
        <Commercials />

    </div>
  );
}

export default App;
