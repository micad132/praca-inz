import "./App.css";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import routes from "./routes/index";

function App() {
  return (
    <div className="App">
      <Header />
      {routes}
    </div>
  );
}

export default App;
