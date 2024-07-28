import { NavLink, Navigate } from "react-router-dom";
import { useAuth } from "./auth";

export const ProtectedRoute = (props: { element: JSX.Element }) => {
  const { isLoggedIn } = useAuth();
  return isLoggedIn ? props.element : <Navigate to={"/login"}/>;
}