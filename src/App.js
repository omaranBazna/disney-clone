import "./App.css";
import LogIn from "./components/LogIn";
import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<LogIn />} />
      </Routes>
    </div>
  );
}

export default App;
