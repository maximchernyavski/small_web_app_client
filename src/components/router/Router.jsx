import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { useAuth } from "./auth_provider";
import { ProtectedRoute } from "./protected_route";
// import { AdminRoute } from "./admin_route";
import LogIn from "../../pages/login/login";
import Blog from "../../pages/blog/blog";
import AdminPanel from "../../pages/admin/admin";

const Routes = () => {
  const { token } = useAuth();
//   const isAdmin = localStorage.getItem("isAdmin")

  // Define public routes accessible to all users
  const routesForPublic = [
    {
    path : "/",
    element: <LogIn />
    }
  ];

  // Define routes accessible only to authenticated users
  const routesForAuthenticatedOnly = [
    {
      path: "/",
      element: <ProtectedRoute />, // Wrap the component in ProtectedRoute
      children: [
        {
          path: "/blog",
          element: <Blog />,
        },
      ],
    },
  ];

  // Define routes accessible only to non-authenticated users
  const routesForNotAuthenticatedOnly = [];

  // Define routes accessible only to admins
  const routesForAdmins = [
    {
        path : "/",
        element: <ProtectedRoute />,
        children: [
            {
                path : "/admin",
                element : <AdminPanel />
            },
        ],
    },
  ];

  // Combine and conditionally include routes based on authentication status
  const router = createBrowserRouter([
    ...routesForPublic,
    ...(!token ? routesForNotAuthenticatedOnly : []),
    ...routesForAdmins,
    ...routesForAuthenticatedOnly,
  ]);

  // Provide the router configuration using RouterProvider
  return <RouterProvider router={router} />;
};

export default Routes;