import { Header } from "../../common/components/Header";
import { LeftSideBar } from "../../admin/routes/Management"


export default () => {
    return (
        <>
        <div className="bg-slate-200 min-h-screen">
            <Header/>
            <LeftSideBar/>
        </div>
        </>
    )
}