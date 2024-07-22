import { createBrowserRouter } from "react-router-dom";
import App from "../../App";
import HomePage from "../Pages/HomePage";
import GameDetailpage from "../Pages/GameDetailpage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/gameHub",

    element: <App></App>,
  },
  { path: "/gameHub/:slug", element: <GameDetailpage /> },
]);

export default router;
