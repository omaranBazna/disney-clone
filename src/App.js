import "./App.css";
import LogIn from "./components/LogIn";
import Header from "./components/Header";
import Home from "./components/Home";
import { Routes, Route } from "react-router-dom";
import Details from "./components/Details";
function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<LogIn />} />
        <Route path="/home" element={<Home />} />
        <Route path="/movies/:id" element={<Details />} />
      </Routes>
    </div>
  );
}

export default App;
