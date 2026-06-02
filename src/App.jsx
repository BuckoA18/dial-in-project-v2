import React from "react";
import { BrowserRouter, Routes, Route } from "react-router";
import AppLayout from "./ui/AppLayout";
import Dashboard from "./pages/Dashboard";
import Settings from "./pages/Settings";

const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route element={<AppLayout />}>
					<Route index element={<Dashboard />} />
				</Route>
				<Route path="settings" element={<Settings />} />
			</Routes>
		</BrowserRouter>
	);
};

export default App;
