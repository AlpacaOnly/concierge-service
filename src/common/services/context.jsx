import { useEffect, useContext, createContext } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useQuery } from "react-query";
import { auth } from "./auth";

export const UserContext = createContext(null);

export const AuthContext = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { setUser } = useContext(UserContext);
  const { isLoading, error, data } = useQuery("userData", auth.verify);

  useEffect(() => {
    if (!data) return;
    setUser(data);

    if (location.pathname.startsWith("/panel")) return;
    navigate("/panel", { replace: true });
  }, [data, isLoading]);

  useEffect(() => {
    if (!error) return;
    if (location.pathname === "/") return;

    navigate("/", { replace: true });
  }, [error, isLoading]);

  if (isLoading) return <div className="px-5 sm:px-8 py-8 text-medium">Загрузка...</div>;

  return <>{children}</>;
};
