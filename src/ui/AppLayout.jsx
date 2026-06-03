import { Outlet } from "react-router";
import Header from "./Header";
import Aside from "./Aside";

const AppLayout = () => {
  return (
    <div className="flex h-dvh w-full flex-col gap-2 bg-neutral-900 sm:p-2 md:gap-4 md:p-4">
      <Header />
      <div className="mt-16 flex gap-2 sm:mt-0 md:gap-4">
        <Aside />
        <Outlet />
      </div>
    </div>
  );
};

export default AppLayout;
