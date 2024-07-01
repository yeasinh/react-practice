import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Calculator from "../screens/calculator/Calculator";
import MyForm from "../screens/form/MyForm";
import MyPosts from "../screens/posts/MyPosts";

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
