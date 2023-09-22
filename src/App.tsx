import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Root";
import Blog from "./pages/blog";
import Home from "./pages/home";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        { path: "", element: <Home /> },
        { path: "blog", element: <Blog /> },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
