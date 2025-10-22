import { createBrowserRouter } from 'react-router-dom';
import Root from '../layout/Root';
import Home from '../pages/Home/Home';
import Profile from '../pages/Profile/Profile';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Root,
    children: [
      {
        path: '/',
        Component: Home,
      },
      {
        path: '/profile',
        Component: Profile,
      },
    ],
  },
]);
