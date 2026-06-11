import { Outlet } from "react-router-dom";
import Navbar from "../../components/user/Navbar";
import Footer from "../../components/user/Footer";

export default function UserLayouts() {
  return (
    <div className="flex flex-col min-h-screen font-[Poppins] select-none">
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
