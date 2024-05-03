import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Rootlayout from './pages/Rootlayout';
import LoginPage from './pages/LoginPage';
import Dashboard from './pages/Dashboard';
import LogoutPage from './pages/LogoutPage';
import IndexPage from './pages/IndexPage'
import { loader as logoutLoader } from './pages/LogoutPage';
import ProtectedRoute from './component/ProtectedRoute';
import PageNotFound from './pages/PageNotFound';
const router = createBrowserRouter([
  {
    path: '/',
    element: <Rootlayout />,
    children: [
      {
        index: true,
        element: <IndexPage />
      },
      {
        path: '*',
        element: <PageNotFound />,
      },
      {
        path: '/login',
        element: <LoginPage />,
      },
      {
        path: '/logout',
        loader: logoutLoader,
        element: <LogoutPage />
      },
      {

        element: <ProtectedRoute />,
        children: [
          {
            path: '/dashboard',
            element: <Dashboard />,
          }
        ]

      }

    ]
  },


])

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
