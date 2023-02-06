import "./index.css";
import "./styles.css";
// import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AuthLayout from "./layouts/AuthLayout";
import { AuthProvider } from "./context/AuthProvider";
import { WorkAreaProvider } from "./context/WorkAreaProvider";
import ProtectedRoute from "./layouts/ProtectedRoute";
import FormSignIn from "./components/forms/SignIn";
import MainMenu from "./pages/MainMenu";
import Building from "./pages/Building";
import Editor from "./pages/Editor";
import Variables from "./pages/Variables";
const App = () => {
  return (
    <BrowserRouter>
      <WorkAreaProvider>
        <AuthProvider>
          <Routes>
            <Route path="/" element={<AuthLayout />}>
              <Route index element={<FormSignIn />} />
            </Route>
            <Route path="/work-area" element={<ProtectedRoute />}>
              <Route index element={<MainMenu />} />
              <Route path="/work-area/building" element={<Building />} />
              <Route path="/work-area/editor" element={<Editor />} />
              <Route path="/work-area/editor/:id" element={<Variables />} />
            </Route>
          </Routes>
        </AuthProvider>
      </WorkAreaProvider>
    </BrowserRouter>
  );
};

export default App;
