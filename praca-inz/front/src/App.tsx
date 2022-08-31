import "./App.css";
import Commercials from "./components/Commercials/Commercials";
import Layout from "./layout/Layout";
import routes from "./routes";
import {useEffect} from "react";

function App() {
    useEffect(() => {
        console.log('wbilem');
    }, []);
  return (
    <div className="App">
        <Layout>
            {routes}
        </Layout>
    </div>
  );
}

export default App;
