import { Outlet } from "react-router-dom";
import SuperAdminSidebar from "../components/Superadmin/SuperAdminSidebar";
import SuperAdminTopbar from "../components/Superadmin/SuperAdminNavbar";

const SuperAdminLayout = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Sidebar */}
      <SuperAdminSidebar />

      {/* Main content shifted to the right */}
      <div className="ml-64 flex flex-col min-h-screen">
        <SuperAdminTopbar />
        <main className="flex-1 mt-16 px-6 pt-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default SuperAdminLayout;
