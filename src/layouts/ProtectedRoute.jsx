import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/layouts/Navbar";
import Sidebar from "../components/layouts/Sidebar";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import Footer from "../components/layouts/Footer";
import Notifications from "../components/notifications/Notifications";
import useWorkArea from "../hooks/useWorkArea";
const ProtectedRoute = () => {
  const { notification, loading } = useWorkArea();
  const location = useLocation();
  const { msg } = notification;
  return (
    <div className="flex flex-col h-screen overflow-x-hidden ">
      <Navbar />
      <div className="flex-1">
        <div className="flex flex-row ">
          <Sidebar />
          <div className="flex-1 px-4 pt-2 pb-24 bg-slate-200 relative">
            {msg && <Notifications notification={notification} />}
            <TransitionGroup>
              <CSSTransition key={location.key} timeout={300} classNames="fade">
                <Outlet />
              </CSSTransition>
            </TransitionGroup>
          </div>
        </div>
      </div>
      <div className="h-full">
        <Footer />
      </div>
    </div>
  );
};

export default ProtectedRoute;
