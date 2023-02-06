import useAuth from "../../hooks/useAuth";
import { useState } from "react";
import logo from "../../assets/img/logo.png";
const SignIn = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { signIn } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    // TODO: Add validations
    signIn({ username, password });
  };

  return (
    <>
      <div className="w-full max-w-lg my-10 bg-white md:shadow sm:rounded-lg p-3 md:p-10">
        <a href="#" className="flex items-center justify-center p-2 w-full">
          <img src={logo} alt="Logo" className=" w-2/6 " />
        </a>
        <h2 className="text-light text-center text-2xl">Log In </h2>
        <form className="pt-6" onSubmit={handleSubmit}>
          <div className="group my-4">
            <input
              type="username"
              name="username"
              id="username"
              placeholder="Nombre de Usuario"
              className="focus:outline-none 
                border 
                   w-full  p-3
                    text-sm
                    rounded-r-md bg-gray-50
                  "
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="group my-4">
            <input
              type="password"
              name="password"
              id="Password"
              placeholder="Contraseña"
              className="focus:outline-none 
                   w-full  p-3
                    text-sm
                    rounded-r-md border bg-gray-50
                    "
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <input
            type="submit"
            value="Sign In"
            className="
            bg-sky-600 mb-5  mt-8 w-full py-3 text-white  text-sm uppercase
            font-bold rounded hover:cursor-pointer hover:bg-sky-800
            transition-colors"
          />
        </form>
        <nav className="text-center  md:flex md:justify-between text-light  items-center"></nav>
      </div>
    </>
  );
};

export default SignIn;
