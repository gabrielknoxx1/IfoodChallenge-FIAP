import { createBrowserRouter } from "react-router-dom"
import { Dashboard } from "../pages/Dashboard"
import { Login } from "../pages/Login"
import { Register } from "../pages/Register"

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "dashboard",
    element: <Dashboard />,
  },
  {
    path: "/register",
    element: <Register />,
  },
])
