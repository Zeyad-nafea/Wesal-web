import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import ProtectedRoute from "./components/layout/ProtectedRoute";
import AdminRoute from "./components/layout/AdminRoute";
import Home from "./pages/Home/Home";
import Courses from "./pages/Courses";
import Dashboard from "./pages/Dashboard";
import Internship from "./pages/internship/Internship";
import InternshipDetail from "./pages/internship/InternshipDetail"; 
import Notfound from "./pages/Notfound";
import Profile from "./pages/Profile";
import Workshop from "./pages/workshop/Workshop";
import WorkshopDetail from "./pages/workshop/WorkshopDetail";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Siginup";
import About from "./pages/About/About";
import Contact from "./pages/Contact";
import ScrollToTop from "./components/Scroll up/Scroll";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        {/* With Header & Footer */}
        <Route element={<Layout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          {/* Public */}
          <Route path="/" element={<Home />} />
          <Route path="/internship" element={<Internship />} />
          <Route path="/internship/:id" element={<InternshipDetail />} /> 
          <Route path="/workshop" element={<Workshop />} />
          <Route path="/workshop/:id" element={<WorkshopDetail />} />  
          <Route path="/courses" element={<Courses />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />

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
