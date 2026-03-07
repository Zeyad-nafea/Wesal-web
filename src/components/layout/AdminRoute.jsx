import { Navigate, Outlet } from "react-router-dom";
import { useLogged } from "../Hooks/UseLogged";

const AdminRoute = () => {
  const { isLogged, user } = useLogged();

  if (!isLogged) return <Navigate to="/login" replace />;
  if (user?.role !== "admin") return <Navigate to="/" replace />;

  return <Outlet />;
};

export default AdminRoute;