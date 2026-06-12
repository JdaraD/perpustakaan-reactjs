import { createBrowserRouter } from "react-router-dom";
import UserLayouts from "../layouts/user/userLayouts";
import AdminLayouts from "../layouts/admin/adminLayouts";

import Home from "../pages/user/Home";
import BookDetails from "../pages/user/BookDetails";
import ReadBook from "../pages/user/ReadBook";
import Books from "../pages/user/Books";
import About from "../pages/user/About";

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
      {
        path: "read-book",
        element: <ReadBook />,
      },
      {
        path: "books",
        element: <Books />,
      },
      {
        path: "About",
        element: <About />,
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
