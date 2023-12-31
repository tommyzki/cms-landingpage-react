import { Navigate, useRoutes } from 'react-router-dom';
// layouts
import DashboardLayout from './layouts/dashboard';
// import SimpleLayout from './layouts/simple';
//
import BlogPage from './pages/BlogPage';
import UserPage from './pages/UserPage';
import LoginPage from './pages/LoginPage';
import Page404 from './pages/Page404';
import ProductsPage from './pages/ProductsPage';
import DashboardAppPage from './pages/DashboardAppPage';
import HomePage from './pages/HomePage';
import MainLayout from './layouts/main/MainLayout';
import AboutPage from './pages/AboutPage';
import GaleryPage from './pages/GaleryPage';
import MenuPage from './pages/MenuPage';
import MenuDetailPage from './pages/MenuDetailPage';

// ----------------------------------------------------------------------

export default function Router() {
  const routes = useRoutes([
    {
      element: <MainLayout />,
      children: [
        { element: <Navigate to="home" />, index: true },
        { path: 'home', element: <HomePage /> },
        { path: 'menu', element: <MenuPage /> },
        { path: 'menu/:id', element: <MenuDetailPage /> },
        { path: 'products', element: <ProductsPage /> },
        { path: 'about', element: <AboutPage /> },
        { path: 'blog', element: <BlogPage /> },
        { path: 'galery', element: <GaleryPage /> },
        { path: '*', element: <Navigate to="/404" /> },
        { path: '404', element: <Page404 /> },
      ],
    },
    {
      path: '/dashboard',
      element: <DashboardLayout />,
      children: [
        { element: <Navigate to="/dashboard/app" />, index: true },
        { path: 'app', element: <DashboardAppPage /> },
        { path: 'menu', element: <MenuPage /> },
        { path: 'user', element: <UserPage /> },
        { path: 'products', element: <ProductsPage /> },
        { path: 'blog', element: <BlogPage /> },
      ],
    },
    {
      path: 'login',
      element: <LoginPage />,
    },
    // {
    //   element: <SimpleLayout />,
    //   children: [
    //     { element: <Navigate to="/dashboard/app" />, index: true },
    //     { path: '404', element: <Page404 /> },
    //     { path: '*', element: <Navigate to="/404" /> },
    //   ],
    // },
    {
      path: '*',
      element: <Navigate to="/404" replace />,
    },
  ]);

  return routes;
}
