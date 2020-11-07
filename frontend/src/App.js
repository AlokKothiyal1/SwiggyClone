import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home";
import LandingPg from "./Components/LandingPg";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <LandingPg />
      </BrowserRouter>
    </div>
  );
}

export default App;
