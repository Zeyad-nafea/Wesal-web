import { Navigate, Outlet } from "react-router-dom";
import { useLogged } from "../Hooks/UseLogged";

const ProtectedRoute = () => {
  const { isLogged } = useLogged();

  return isLogged ? <Outlet /> : <Navigate to="/auth/login" replace />;
};

export default ProtectedRoute;