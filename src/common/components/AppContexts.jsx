import { QueryClientProvider } from "react-query";
import { queryClient as query } from "../services/client";

import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { userHooks } from "../api/user";

export const AppServiceContexts = ({ children }) => {
  return (
    <QueryClientProvider client={query} contextSharing={true}>
      {children}
    </QueryClientProvider>
  );
};

export const AppCustomContexts = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const user = userHooks.useUser();
  const { isLoading, isError, data } = userHooks.useUserVerify();

  useEffect(() => {
    if (data) {
      user.set(data);
    }

    if (data && !location.pathname.startsWith("/panel")) {
      navigate("/panel", { replace: true });
    }
  }, [data, isLoading]);

  useEffect(() => {
    if (isError && location.pathname.startsWith("/panel")) {
      navigate("/", { replace: true });
    }
  }, [isError, isLoading]);

  if (isLoading) return <div className="px-5 sm:px-8 py-8 text-medium">Загрузка...</div>;

  return <>{children}</>;
};
