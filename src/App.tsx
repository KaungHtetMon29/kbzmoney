import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Root";

import Home from "./pages/home";
import { lazy, Suspense } from "react";
const Blog = lazy(() => import("./pages/blog"));
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        { path: "", element: <Home /> },
        {
          path: "blog",
          children: [
            {
              path: "",
              element: (
                <Suspense fallback={<p>Loading.....</p>}>
                  <Blog />
                </Suspense>
              ),
            },
            {
              path: ":id",
              element: (
                <Suspense fallback={<p>Loading.....</p>}>
                  <Blog />
                </Suspense>
              ),
            },
          ],
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
