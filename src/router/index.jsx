import { createBrowserRouter } from "react-router-dom";
import UserLayouts from "../layouts/user/userLayouts";
import AdminLayouts from "../layouts/admin/adminLayouts";

import Home from "../pages/user/Home";
import BookDetails from "../pages/user/BookDetails";

import AdminDashboard from "../pages/admin/AdminDashboard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <UserLayouts />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "book-details",
        element: <BookDetails />,
      },
    ],
  },
  {
    path: "/admin",
    element: <AdminLayouts />,
    // element : <ProtectedRoute />,
    children: [
      {
        index: true,
        element: <AdminDashboard />,
      },
    ],
  },
]);

export default router;
