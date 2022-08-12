import "./App.css";
import Commercials from "./components/Commercials/Commercials";
import Layout from "./layout/Layout";

function App() {
  return (
    <div className="App">
        <Layout>
            <Commercials />
        </Layout>
    </div>
  );
}

export default App;
