import { createBrowserRouter } from 'react-router-dom';
import { PageNotFound, Navbar, Login, Signup } from '../component';
import { HomeScreen, ProductScreen } from '../screens';


export default createBrowserRouter([
  {
    path: '/login',
    element: <Login/>,
  },
  {
    path: '/signup',
    element: <Signup/>,
  },
  {
    path: '/',
    element: <Navbar/>,
    children: [
      {
        path: '/',
        element: <HomeScreen />
      },
      {
        path: '/product/:id',
        element: <ProductScreen />
      }
    ]
  },
  {
    path: '*',
    element: <PageNotFound />
  },
  
]);