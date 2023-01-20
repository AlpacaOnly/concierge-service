import { default as React } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import loadable from "@loadable/component";
import { userHooks } from "../api/user";

const LoginRoute = loadable(() => import("../routes/Login"));
const NotFoundRoute = loadable(() => import("../routes/NotFound"));
const ClientSettingsRoute = loadable(() => import("../../client/routes/Settings"));
const ClientApplicationsRoute = loadable(() => import("../../client/routes/Applications"));
const ClientReferenceRoute = loadable(() => import("../../client/routes/Reference"));
const ClientHelpRoute = loadable(() => import("../../client/routes/Help"));
const ClientLayout = loadable(() => import("../../client/components/Layout"));

export const AppRoutes = () => {
  const { data } = userHooks.useUser();
  const role = data?.role ?? "";

  return (
    <Routes>
      <Route index element={<LoginRoute />} />

      {role === "client" && (
        <Route path="panel" element={<ClientLayout />}>
          <Route index element={<ClientSettingsRoute />} />
          <Route path="settings" element={<ClientSettingsRoute />} />
          <Route path="applications" element={<ClientApplicationsRoute />} />
          <Route path="help" element={<ClientHelpRoute />} />
          <Route path="reference" element={<ClientReferenceRoute />} />
        </Route>
      )}
      {role === "admin" && <Route path="panel" element={"admin"}></Route>}
      {role === "company" && <Route path="panel" element={"company"}></Route>}
      {role === "partner" && <Route path="panel" element={"partner"}></Route>}

      <Route path="*" element={<NotFoundRoute />} />
    </Routes>
  );
};
