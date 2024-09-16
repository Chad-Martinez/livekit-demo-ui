import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RoomPage from "./pages/RoomPage";
import MainPage from "./pages/MainPage";
import Root from "./Layouts/Root";

const App = () => {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Root />,
      children: [
        {
          index: true,
          element: <MainPage />
        },
        {
          path: '/rooms/:roomId',
          element: <RoomPage />
        },
      ]
      
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
