import {Header} from "../routes/Header"
import {Outlet} from "react-router-dom";
import {LeftSideBar} from "../components/LeftSideBar";

export default () => {
    return (
        <>
            <div className="bg-slate-200 min-h-screen">
                <Header/>

                <div className="py-10 px-6 sm:px-10">
                    <div className="flex flex-1 overflow-hidden h-screen max-w-screen-2xl mt-8 pb-6 pl-8">
                        <LeftSideBar/>
                        <div className="hidden lg:flex md:flex flex-col lg:w-4/5 md:w-4/5 sm:w-4/5 xs:w-4/5 bg-white shadow-md rounded-xl mr-4">
                            <Outlet/>
                        </div>
                    </div>
                </div>

            </div>

        </>
    )
}