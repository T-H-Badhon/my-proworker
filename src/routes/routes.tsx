import { createBrowserRouter } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import Homepage from "../pages/Homepage";
import LoginPage from "../pages/Login";
import RegisterPage from "../pages/Register";

const Routes = createBrowserRouter([
  {
    path: "/",
    element: (
      <ProtectedRoute allowType={["admin"]}>
       <Homepage/>
      </ProtectedRoute>
    ),
  },
  {
    path: "/login",
    element: <LoginPage/>,
  },
  {
    path: "/register",
    element: <RegisterPage/>,
  },
]);

export default Routes;
