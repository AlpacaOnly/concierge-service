import { default as React } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import loadable from "@loadable/component";
import { userHooks } from "../api/user";
import { useRoles } from "../api/roles";

const LoginRoute = loadable(() => import("../routes/Login"));
const NotFoundRoute = loadable(() => import("../routes/NotFound"));
const ClientSettingsRoute = loadable(() => import("../../client/routes/Settings"));
const ClientApplicationsRoute = loadable(() => import("../../client/routes/Applications"));
const ClientReferenceRoute = loadable(() => import("../../client/routes/Reference"));
const ClientHelpRoute = loadable(() => import("../../client/routes/Help"));
const ClientLayout = loadable(() => import("../../client/components/Layout"));

const ClientChatLayout = loadable(() => import("../../client/components/ChatLayout"));


export const AppRoutes = () => {
  const user = userHooks.useUser();
  const roles = useRoles();
  const role = user.get()?.role ?? 0;

  return (
    <Routes>
      <Route index element={<LoginRoute />} />

      {role === roles.CLIENT && (
        <>
        <Route path="panel" element={<ClientLayout />}>
          <Route index element={<ClientSettingsRoute />} />
          <Route path="settings" element={<ClientSettingsRoute />} />
          <Route path="applications" element={<ClientApplicationsRoute />} />
          <Route path="help" element={<ClientHelpRoute />} />
          <Route path="reference" element={<ClientReferenceRoute />} />
        </Route>
        <Route path="chats" element={<ClientChatLayout />}>
          <Route path="active" element={<ClientChatLayout />} />
          <Route path="archive" element={<ClientChatLayout />} />
          <Route path="uncompleted" element={<ClientChatLayout />} />
        </Route>
          </>
      )}
      {role === roles.ADMIN && <Route path="panel" element={"admin"}></Route>}
      {role === roles.MANAGER && <Route path="panel" element={"manager"}></Route>}
      {role === roles.COMPANY && <Route path="panel" element={"company"}></Route>}
      {role === roles.PARTNER && <Route path="panel" element={"partner"}></Route>}

      <Route path="*" element={<NotFoundRoute />} />
    </Routes>
  );
};
