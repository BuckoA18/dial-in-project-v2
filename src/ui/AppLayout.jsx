import { Outlet } from "react-router";
import Aside from "./Aside";

const AppLayout = () => {
  return (
    <div className="flex h-dvh w-full gap-2 bg-neutral-950 sm:p-2 md:gap-4 md:p-2">
      <Aside />
      <Outlet />
    </div>
  );
};

export default AppLayout;
