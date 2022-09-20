import "./App.css";
import Commercials from "./components/Commercials/Commercials";
import Layout from "./layout/Layout";
import routes from "./routes";
import {useEffect} from "react";
import ScrollToTop from "react-scroll-to-top";
import { useSelector } from "react-redux";
import {getAllCommercials} from "./store/commercialSlice";
import {getAllImages} from "./store/imageSlice";

function App() {

    // const commercials = useSelector(getAllCommercials);
    useEffect(() => {
        console.log('wbilem');
    }, []);
    // console.log('REKLAMY', commercials);
    const images = useSelector(getAllImages);
    console.log('OBRAZY', images);

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
