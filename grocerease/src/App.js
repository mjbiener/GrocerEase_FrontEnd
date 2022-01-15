import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Register } from "./components/Register";
import ForgotUsername from "./components/ForgotUsername";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/forgot_username" element={<ForgotUsername />} />
      </Routes>
    </Router>
  );
}

export default App;
