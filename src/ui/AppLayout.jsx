import { Outlet } from "react-router";
import Header from "./Header";
import Aside from "./Aside";
import BottomNav from "./BottomNav";

const AppLayout = () => {
  return (
    <div className="flex h-dvh w-full flex-col gap-2 bg-neutral-950 sm:p-2 md:gap-4 md:p-2">
      <Header />
      <div className="relative mt-16 flex h-full gap-2 sm:mt-0">
        <Aside />
        <Outlet />
        <BottomNav />
      </div>
    </div>
  );
};

export default AppLayout;
