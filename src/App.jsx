import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RoomPage from "./pages/RoomPage";

const App = () => {

  const router = createBrowserRouter([
    {
      path: '/:roomId',
      element: <RoomPage />
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
