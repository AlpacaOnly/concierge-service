import {Logo} from "../../common/components/Header"
import {Profile} from "../../common/components/Header"

export const Header = () => {
    return (
        <>
        <div className="h-16 lg:h-20 flex lg:justify-between bg-white shadow-lg shadow-slate-200">
            <Logo/>
            <Profile/>
        </div>
        </>
    );
}