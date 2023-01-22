import * as React from "react";
import { AppServiceContexts, AppCustomContexts } from "./AppContexts";
import { AppRoutes } from "./AppRoutes";

export const App = () => {
  return (
    <AppServiceContexts>
      <AppCustomContexts>
        <AppRoutes />
      </AppCustomContexts>
    </AppServiceContexts>
  );
};
