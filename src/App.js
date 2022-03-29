import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Calculator from "./components/Calculator";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import "./App.css";

function App() {
  return (
    <div className="wrapper">
      <Router>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/calculator" element={<Calculator />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
