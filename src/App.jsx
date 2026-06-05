import React from "react";
import { BrowserRouter, Routes, Route } from "react-router";
import AppLayout from "./ui/AppLayout";
import Dashboard from "./pages/Dashboard";
import Settings from "./pages/Settings";
import Beans from "./pages/Beans";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="beans" element={<Beans />} />
        </Route>
        <Route path="settings" element={<Settings />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
