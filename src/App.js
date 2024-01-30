import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./Pages/Home";
import Root from "./Pages/Root";
import About from "./Pages/About";
import Todos from "./Pages/Todos";
import PageNotFound from "./Pages/PageNotFound";
import MyTodos from "../src/Pages/MyTodos";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <PageNotFound />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/todos",
        element: <Todos />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/todoslist",
        element: <MyTodos />,
      },
    ],
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
