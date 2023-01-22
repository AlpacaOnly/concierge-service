import { Header } from "../../common/components/Header";
import Applications from "../routes/Applications";

export default () => {
  return (
    <>
      <div className="bg-slate-200 min-h-screen">
        <Header />

        <div className="py-10 px-5 sm:px-10">
          <Applications />
        </div>
      </div>
    </>
  );
};
