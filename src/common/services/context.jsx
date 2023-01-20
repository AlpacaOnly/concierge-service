import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useUser } from "./store";

export const AuthContext = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { isLoading, isError, data } = useUser();

  useEffect(() => {
    if (data && !location.pathname.startsWith("/panel")) {
      navigate("/panel", { replace: true });
    }
  }, [data, isLoading]);

  useEffect(() => {
    if (isError && location.pathname !== "/") {
      navigate("/", { replace: true });
    }
  }, [isError, isLoading]);

  if (isLoading) return <div className="px-5 sm:px-8 py-8 text-medium">Загрузка...</div>;

  return <>{children}</>;
};
