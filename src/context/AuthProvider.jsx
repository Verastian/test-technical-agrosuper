import { useState, useEffect, createContext } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  useEffect(() => {}, []);

  //* AUTHENTICATION
  // LOGOUT
  const logoutSession = () => {
    navigate("/");
    localStorage.setItem("user", JSON.stringify({}));
    setUser({});
  };
  // LOCAL SIGIN
  const signIn = ({ username, password }) => {
    console.log(username);
    const token = "tokentokentokenABC";

    if (username !== "devsafio") {
      setMessage("El usuario no esta registrado");
      return;
    }
    if (password !== "123123") {
      setMessage("La contraseña no corresponde");
      return;
    }
    const user = {
      username,
      token,
    };
    localStorage.setItem("user", JSON.stringify(user));
    // setUser(JSON.parse(localStorage.getItem("user")));
    navigate("/work-area");
  };

  return (
    <AuthContext.Provider
      value={{
        // setAuth,
        // auth,
        user,
        logoutSession,
        signIn,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
export { AuthProvider };

export default AuthContext;
