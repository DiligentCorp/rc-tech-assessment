import { createBrowserRouter } from "react-router-dom";
import { Layout } from '../components/Layout';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        async lazy() {
          const { Rooms } = await import('../pages/Rooms')
          return { Component: Rooms }
        }
      },
      {
        path: '/rooms/:id',
        async lazy() {
          const { Room } = await import('../pages/Room')
          return { Component: Room }
        }
      }
    ],
  },
  {
    path: '/signup',
    async lazy() {
      const { SignUp } = await import('../pages/SignUp')
      return { Component: SignUp }
    }
  }
]);
