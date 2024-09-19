import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// import RoomPage from "./pages/RoomPage";
import MainPage from './pages/MainPage';
import Root from './Layouts/Root';
import { lazy } from 'react';

const RoomPage = lazy(() => import('./pages/RoomPage'));
const TestPage = lazy(() => import('./pages/TestPage'));

const App = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Root />,
      children: [
        {
          index: true,
          element: <MainPage />,
        },
        {
          path: 'rooms/:roomId',
          element: <RoomPage />,
        },
        {
          path: 'test-page',
          element: <TestPage />,
        },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
