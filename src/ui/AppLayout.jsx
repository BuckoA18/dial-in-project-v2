import React from "react";
import { Outlet } from "react-router";
import Header from "./Header";
import Aside from "./Aside";

const AppLayout = () => {
	return (
		<div className="flex flex-col h-dvh">
			<Header />
			<Aside />
			<Outlet />
		</div>
	);
};

export default AppLayout;
