import React, { useState } from "react";

const CardAvatar = ({ username, handleLogout }) => {
  const [showInfo, setShowInfo] = useState(false);

  const handleHover = () => {
    setShowInfo(!showInfo);
  };
  return (
    <div className="relative z-50">
      <button
        className="flex items-center text-white focus:outline-none"
        onClick={handleHover}
      >
        <img
          className="w-12 h-12 rounded-full"
          src={`https://i.picsum.photos/id/660/2508/1672.jpg?hmac=D_MkrRyzUZRYLOGoa4HJ1WJTfnzN0qshbCEPpaCoSuI`}
          alt={username}
        />
      </button>
      {showInfo && (
        <div
          onMouseLeave={handleHover}
          className="absolute right-0 w-48 mt-2 bg-white rounded-lg shadow-xl py-2"
        >
          <div className="px-4 py-2">
            <p className="text-sm font-medium">{username}</p>
            <p className="text-xs text-gray-600">{username}@email.com</p>
          </div>
          <div className="border-t border-gray-200"></div>
          <div className="px-4 py-2">
            <a
              href="#"
              className="block px-2 py-1 text-sm font-medium text-indigo-600 hover:bg-indigo-100"
            >
              Perfil
            </a>
            <a
              href="#"
              className="block px-2 py-1 text-sm font-medium text-indigo-600 hover:bg-indigo-100"
            >
              Configuración
            </a>
            <a
              href="#"
              className="block px-2 py-1 text-sm font-medium text-indigo-600 hover:bg-indigo-100"
            >
              <button onClick={handleLogout}>Cerrar sesión</button>
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default CardAvatar;
