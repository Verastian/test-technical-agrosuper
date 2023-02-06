import useAuth from "../../hooks/useAuth";
import logo from "../../assets/img/logo.png";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import CardAvatar from "../cards/CardAvatar";
const Navbar = () => {
  const { pathname } = useLocation();
  const { logoutSession } = useAuth();
  const [username, setUserName] = useState("");
  useEffect(() => {
    const userSesion = JSON.parse(localStorage.getItem("user"));
    if (!userSesion) {
      return;
    }
    setUserName(userSesion.username);
  }, []);
  const handleLogout = () => {
    console.log("logout");
    logoutSession();
  };
  return (
    <nav className="bg-[#005da7]  pb-2">
      <div className="container mx-auto flex flex-wrap items-center">
        <div className="w-1/2 flex justify-start items-center">
          <Link to="/" className="text-2xl text-gray-100 font-bold">
            <img src={logo} alt="Logo" className=" w-3/6" />
          </Link>
        </div>

        {username ? (
          <div className="w-1/2 flex justify-end items-center">
            <CardAvatar username={username} handleLogout={handleLogout} />
          </div>
        ) : (
          ""
        )}
      </div>
    </nav>
  );
};

export default Navbar;
