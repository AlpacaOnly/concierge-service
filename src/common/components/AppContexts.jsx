import { QueryClientProvider } from "react-query";
import { queryClient as query } from "../services/client";
import { AuthContext } from "../services/context";

export const AppServiceContexts = ({ children }) => {
  return (
    <QueryClientProvider client={query} contextSharing={true}>
      {children}
    </QueryClientProvider>
  );
};

export const AppCustomContexts = ({ children }) => {
  return <AuthContext>{children}</AuthContext>;
};
