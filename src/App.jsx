import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainPage from './pages/MainPage';
import Root from './Layouts/Root';
import { lazy } from 'react';

const RoomPage = lazy(() => import('./pages/RoomPage'));

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
