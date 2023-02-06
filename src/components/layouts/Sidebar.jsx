import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faTableCellsLarge,
  faUsers,
  faChartLine,
  faBars,
  faPiggyBank,
  faDrumstickBite,
  faFeather,
  faPencilAlt,
  faChevronCircleLeft,
  faChevronCircleRight,
} from "@fortawesome/free-solid-svg-icons";

const Sidebar = () => {
  const location = useLocation();
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [username, setUserName] = useState("");
  useEffect(() => {
    const userSesion = JSON.parse(localStorage.getItem("user"));
    setUserName(userSesion.username);
  }, []);

  const Menus = [
    { title: "Main", icon: faChartLine, path: "/work-area" },
    { title: "Cerdos", icon: faPiggyBank, path: "/work-area/building" },
    { title: "Pollo", icon: faDrumstickBite, path: "/work-area/building" },
    { title: "Pavo", icon: faFeather, path: "/work-area/building" },
    { title: "Editor", icon: faPencilAlt, path: "/work-area/editor" },
  ];

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };
  return (
    <aside
      className={`bg-[#005da7]  sm:min-h-screen p-5 transition-width duration-200 ${
        isCollapsed ? "w-16" : "sm:w-1/5 xl:w-1/6"
      }`}
    >
      <div className="relative w-full pt-5 pb-2">
        <button
          className="bg-transparent text-gray-300 text-xl p-2 rounded-lg absolute -top-5 -right-3"
          onClick={toggleSidebar}
        >
          <FontAwesomeIcon
            icon={isCollapsed ? faChevronCircleRight : faChevronCircleLeft}
            className="my-auto px-2 "
          />
        </button>
        <div className="h-8">
          <p
            className={`text-white text-2xl font-bold ${
              isCollapsed
                ? " -translate-x-[10rem]  opacity-0"
                : "delay-200 transition-opacity ease-in-out duration-300 opacity-100 "
            }`}
          >
            Hola, <span className="text-[#f14a3f]">{username}</span>!
          </p>
        </div>
      </div>

      <div className="flex flex-col">
        {Menus.map((menu, index) => (
          <Link
            key={index}
            to={menu.path}
            className={` font-light 
         text-lg inline-flex mt-4 transition ease-in-out duration-200 ${
           location.pathname === menu.path
             ? "text-gray-100"
             : "text-gray-400 hover:text-gray-100"
         }`}
          >
            <FontAwesomeIcon icon={menu.icon} className="my-auto px-2" />
            <span
              className={`${
                isCollapsed
                  ? " -translate-x-[10rem]  opacity-0"
                  : "delay-75 transition-opacity ease-in-out duration-300 opacity-100 "
              }`}
            >
              {menu.title}
            </span>
          </Link>
        ))}
      </div>
    </aside>
  );
};

export default Sidebar;
