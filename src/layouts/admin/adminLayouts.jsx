import { Outlet } from "react-router-dom";
import Navbar from "../../components/admin/Navbar";
import Footer from "../../components/admin/Footer";

export default function AdminLayouts() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}
