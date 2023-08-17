import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/AuthContext";
import { ReactNode } from "react";

export function PrivateRoutes({ children }: { children: ReactNode }) {
  const { user } = useAuth();
  const isAuth = !!user;

  return isAuth ? children : <Navigate to="/" />;
}
