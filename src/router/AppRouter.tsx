import { Routes, Route } from "react-router-dom";
import { Home } from "../Pages/Home/Home";
import { Toaster } from "sonner";

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Toaster richColors />
    </>
  );
};
