import "./App.css";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import routes from "./routes/index";
import Commercials from "./components/Commercials/Commercials";

function App() {
  return (
    <div className="App">
        <div className="App__main-content">
            <Header />
            {routes}
        </div>
        <Commercials />

    </div>
  );
}

export default App;
