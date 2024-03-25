import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./routes/Home/Home.jsx";
import Interview from "./routes/Interview/Interview.jsx";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/interview",
      element: <Interview />,
    }
  ]);

  return (
    <>
        <RouterProvider router={router} />
    </>
  );
}

export default App;
