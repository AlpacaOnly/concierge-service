import { Outlet } from "react-router-dom";
import { Header } from "../../common/components/Header";

export default () => {
  return (
    <>
      <div className="bg-slate-200 min-h-screen">
        <Header />

        <div className="py-10 px-3 sm:px-10">
          <Outlet />
        </div>
      </div>
    </>
  );
};
