import { BrowserRouter, Routes, Route } from "react-router";
import AppLayout from "./ui/AppLayout";
import Dashboard from "./pages/Dashboard";
import Settings from "./pages/Settings";
import Beans from "./pages/Beans";
import NewBean from "./pages/NewBean";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Toaster } from "react-hot-toast";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <div>
        <Toaster />
      </div>
      <ReactQueryDevtools initialIsOpen={false} />
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="beans" element={<Beans />} />
            <Route path="beans/new" element={<NewBean />} />
          </Route>
          <Route path="settings" element={<Settings />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
};

export default App;
