import {Header} from "../routes/Header"
import {Outlet} from "react-router-dom";
import {LeftSideBar} from "../routes/Management.jsx";

export default () => {
    return (
        <>
            <div className="bg-slate-200 min-h-screen">
                <Header/>

                <div className="py-10 px-6 sm:px-10">
                    <div className="flex flex-1 overflow-hidden h-screen max-w-screen-2xl mt-8 pb-6 pl-8">
                        <LeftSideBar/>
                        <Outlet/>
                    </div>
                </div>
            </div>

        </>
    )
}