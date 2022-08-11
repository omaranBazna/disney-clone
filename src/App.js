import "./App.css";
import LogIn from "./components/LogIn";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LogIn />} />
      </Routes>
    </div>
  );
}

export default App;
