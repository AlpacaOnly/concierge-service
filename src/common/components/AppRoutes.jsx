import {default as React} from "react";
import {Route, Routes} from "react-router-dom";
import loadable from "@loadable/component";
import {userHooks} from "../api/user";
import {useRoles} from "../api/roles";

const LoginRoute = loadable(() => import("../routes/Login"));
const NotFoundRoute = loadable(() => import("../routes/NotFound"));
const ClientSettingsRoute = loadable(() => import("../../client/routes/Settings"));
const ClientApplicationsRoute = loadable(() => import("../../client/routes/Applications"));
const ClientReferenceRoute = loadable(() => import("../../client/routes/Reference"));
const ClientHelpRoute = loadable(() => import("../../client/routes/Help"));
const ClientLayout = loadable(() => import("../../client/components/Layout"));

const ClientChatLayout = loadable(() => import("../../client/components/ChatLayout"));

const AdminLayout = loadable(() => import("../../admin/components/Layout"))
const AdminPartnerLayout = loadable(() => import("../../admin/routes/Partner"))
const AdminManagerLayot = loadable (()=>import("../../admin/routes/Manager")) 
const AdminClientLayot = loadable (()=>import("../../admin/routes/Client")) 
const AdminStatisticLayout = loadable(() => import("../../admin/routes/Statistic"))
const AdminSettingsLayout = loadable (() => import ("../../admin/routes/Settings"))
const AdminAddPartnerLayout = loadable(() => import("../../admin/components/AddPartnerLayout"))
const AdminEditPartnerLayout = loadable(() => import("../../admin/components/EditPartnerLayout"))


export const AppRoutes = () => {
    const user = userHooks.useUser();
    const roles = useRoles();
    const role = user.get()?.role ?? 0;

    return (
        <Routes>
            <Route index element={<LoginRoute/>}/>

            {role === roles.CLIENT && (
                <>
                    <Route path="panel" element={<ClientLayout/>}>
                        <Route index element={<ClientSettingsRoute/>}/>
                        <Route path="settings" element={<ClientSettingsRoute/>}/>
                        <Route path="applications" element={<ClientApplicationsRoute/>}/>
                        <Route path="help" element={<ClientHelpRoute/>}/>
                        <Route path="reference" element={<ClientReferenceRoute/>}/>
                    </Route>
                    <Route path="chats" element={<ClientChatLayout/>}>
                        <Route path="active" element={<ClientChatLayout/>}/>
                        <Route path="archive" element={<ClientChatLayout/>}/>
                        <Route path="uncompleted" element={<ClientChatLayout/>}/>
                    </Route>
                </>
            )}
            {role === roles.ADMIN && (
                <Route path="panel" element={<AdminLayout/>}>
                    <Route path="partner" element={<AdminPartnerLayout/>}>
                        <Route path="add" element={<AdminAddPartnerLayout/>}/>
                    </Route>
                    <Route path="manager" element={<AdminManagerLayot/>}/>
                    <Route path="client" element={<AdminClientLayot/>}/>
                    <Route path="statistic" element={<AdminStatisticLayout/>}/>
                    <Route path="settings" element={<AdminSettingsLayout/>}/>
                </Route>

            )}


            {role === roles.MANAGER && <Route path="panel" element={"manager"}></Route>}
            {role === roles.COMPANY && <Route path="panel" element={"company"}></Route>}
            {role === roles.PARTNER && <Route path="panel" element={"partner"}></Route>}

            <Route path="*" element={<NotFoundRoute/>}/>
        </Routes>
    );
};
