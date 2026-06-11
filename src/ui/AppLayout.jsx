import { Outlet } from "react-router";
import Aside from "./Aside";

const AppLayout = () => {
  return (
    <div className="flex h-dvh w-full gap-2 bg-neutral-950 font-mono sm:p-2 md:p-2">
      <Aside />
      <Outlet />
    </div>
  );
};

export default AppLayout;
