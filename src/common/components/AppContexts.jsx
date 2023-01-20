import { QueryClientProvider } from "react-query";
import { queryClient as query } from "../services/client";

import { UserContext, AuthContext } from "../services/context";
import { useUser } from "../services/store";

export const AppServiceContexts = ({ children }) => {
  return (
    <QueryClientProvider client={query} contextSharing={true}>
      {children}
    </QueryClientProvider>
  );
};

export const AppCustomContexts = ({ children }) => {
  const user = useUser();

  return (
    <UserContext.Provider value={user}>
      <AuthContext>{children}</AuthContext>
    </UserContext.Provider>
  );
};
