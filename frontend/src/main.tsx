import Login from './pages/login';
import Register from './pages/register';
import Places from './pages/places';
import Rooms from './pages/rooms';
import Devices from './pages/devices';
import Visualization from './pages/visualization';
import { SessionProvider, useSession } from './utils/useSession';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
  useNavigate
} from 'react-router-dom';
import React, { useEffect } from 'react';

import 'virtual:windi.css'

const RedirectBySessionStatus = () => {
  const session = useSession();
  const navigate = useNavigate();
  useEffect(() => {
    if (session.isLoading) return;
    if (session.token) navigate('/places');
    else navigate('/login');
  }, [session.isLoading, session.token]);
  return null;
};

const router = createBrowserRouter([
  {
    path: '/',
    element: <RedirectBySessionStatus/>
  },
  {
    path: '/login',
    element: <Login/>,
  },
  {
    path: '/register',
    element: <Register/>,
  },
  {
    path: '/places',
    element: <Places/>,
  },
  {
    path: '/places/:placeId/rooms',
    element: <Rooms/>,
  },
  {
    path: '/places/:placeId/rooms/:roomId/devices',
    element: <Devices/>,
  },
  {
    path: '/places/:placeId/rooms/:roomId/visualization',
    element: <Visualization/>,
  }
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <SessionProvider>
      <div className="mx-auto max-w-md">
        <RouterProvider router={router}/>
      </div>
    </SessionProvider>
  </React.StrictMode>,
);

