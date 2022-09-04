import "./App.css";
import Commercials from "./components/Commercials/Commercials";
import Layout from "./layout/Layout";
import routes from "./routes";
import {useEffect} from "react";
import ScrollToTop from "react-scroll-to-top";

function App() {
    useEffect(() => {
        console.log('wbilem');
    }, []);
  return (
    <div className="App">
        <Layout>
            {routes}
            <ScrollToTop smooth top={80}/>
        </Layout>
    </div>
  );
}

export default App;
