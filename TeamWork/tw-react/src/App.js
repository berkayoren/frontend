import "./App.scss";
import Home from "./component/Home";
import Navbar from "./component/Navbar";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Home />
    </div>
  );
};

export default App;
