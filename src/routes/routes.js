import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Calculator from "../screens/Calculator";
import MyForm from "../screens/MyForm";
import MyPosts from "../screens/MyPosts";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/calculator",
    element: <Calculator />,
  },
  {
    path: "/form",
    element: <MyForm />,
  },
  {
    path: "/posts",
    element: <MyPosts />,
  },
]);

export default router;
