import { Outlet } from "react-router-dom";
import Navbar from "../components/layouts/Navbar";

const AuthLayout = () => {
  return (
    <>
      <div className="z-50">
        <Navbar />
      </div>
      <main className="flex justify-center items-center bg-gray-100 h-screen">
        <Outlet />
      </main>
    </>
  );
};

export default AuthLayout;
