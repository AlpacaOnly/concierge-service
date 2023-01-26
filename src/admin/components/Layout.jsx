import {Panel} from "../../admin/routes/Management" 
import {Header} from "../routes/Header"
import { LeftSideBar } from "../../admin/routes/Management";
import { Outlet } from "react-router-dom";

export default () => {
    return (
        <>
        <div className="bg-slate-200 min-h-screen">
            <Header/>
            <Panel/>
        </div>
        
        </>
    )
}