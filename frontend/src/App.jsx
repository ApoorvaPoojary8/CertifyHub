import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import Dashboard from "./pages/Dashboard";
import Events from "./pages/Events";
import Certificates from "./pages/Certificates";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
         {/* Dashboard Route */}
      <Route path="/dashboard" element={<Dashboard />} />
       <Route path="/events" element={<Events />} />
       <Route
  path="/dashboard/certificates"
  element={<Certificates />}
/>

    </Routes>
  );
}

export default App;