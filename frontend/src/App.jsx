import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import Dashboard from "./pages/Dashboard";
import Events from "./pages/Events";
import CreateEvent from "./pages/CreateEvent";
import Certificates from "./pages/Certificates";
import Profile from "./pages/Profile";

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
<Route path="/events/create" element={<CreateEvent />} />
       <Route
  path="/dashboard/certificates"
  element={<Certificates />}
/>
<Route path="/profile" element={<Profile />} />


    </Routes>
  );
}

export default App;