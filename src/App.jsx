import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import ProtectedRoute from "./components/ProtectedRoute";
import AdminRoute from "./components/AdminRoute";

import Home from "./pages/Home";
import Courses from "./pages/Courses";
import Dashboard from "./pages/Dashboard";
import Internship from "./pages/Internship";
import Notfound from "./pages/Notfound";
import Profile from "./pages/Profile";
import Workshop from "./pages/Workshop";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Auth — no header/footer */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* With Header & Footer */}
        <Route element={<Layout />}>

          {/* Public */}
          <Route path="/" element={<Home />} />
           <Route path="/internship" element={<Internship />} />
            <Route path="/workshop" element={<Workshop />} />
            <Route path="/courses" element={<Courses />} />

          {/* Protected - logged in users */}
          <Route element={<ProtectedRoute />}>
            
            <Route path="/profile" element={<Profile />} />
           
          </Route>

          {/* Admin only */}
          <Route element={<AdminRoute />}>
            <Route path="/dashboard" element={<Dashboard />} />
          </Route>

          {/* 404 */}
          <Route path="*" element={<Notfound />} />

        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;