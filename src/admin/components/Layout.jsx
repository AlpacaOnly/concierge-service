import {Panel} from "../../admin/routes/Management" 
import {Header} from "../routes/Header"

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