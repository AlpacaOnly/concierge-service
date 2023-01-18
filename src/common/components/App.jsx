import * as React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import loadable from "@loadable/component";

const LoginRoute = loadable(() => import("../routes/Login"));
const ClientSettingsRoute = loadable(() => import("../../client/routes/Settings"));
const ClientApplicationsRoute = loadable(() => import("../../client/routes/Applications"));
const ClientReferenceRoute = loadable(() => import("../../client/routes/Reference"));
const ClientHelpRoute = loadable(() => import("../../client/routes/Help"));
const ClientLayout = loadable(() => import("../../client/components/Layout"));

export const App = () => {
  const RolesRoutes = useRolesBasedRoutes();

  return (
    <Routes>
      <Route index element={<LoginRoute />} />
      {RolesRoutes}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

function useRolesBasedRoutes() {
  // TODO: redirect user if it's not logged in
  // ...

  // TODO: get user from store
  let user = {
    role: "client",
  };

  switch (user.role) {
    case "admin":
      return useAdminRoutes();

    case "client":
      return useClientRoutes();

    case "company":
      return useCompanyRoutes();

    case "partner":
      return usePartnerRoutes();

    default:
      return null;
  }
}

function useClientRoutes() {
  return (
    <>
      <Route path="panel" element={<ClientLayout />}>
        <Route index element={<ClientSettingsRoute />} />
        <Route path="settings" element={<ClientSettingsRoute />} />
        <Route path="applications" element={<ClientApplicationsRoute />} />
        <Route path="help" element={<ClientHelpRoute />} />
        <Route path="reference" element={<ClientReferenceRoute />} />
      </Route>
    </>
  );
}
function useAdminRoutes() {
  return <></>;
}

function useManagerRoutes() {
  return <></>;
}

function usePartnerRoutes() {
  return <></>;
}
