import Sidebar from "../../../components/Superadmin/SuperAdminSidebar";
import Navbar from "../../../components/Superadmin/SuperAdminNavbar";

const ClubsAndCourts = () => {
return (
    <div className="app">
      <Sidebar />
      <section id="content">
        <Navbar />
        <main className="p-6 flex justify-center items-center min-h-[80vh]">
          <div className="bg-white border-2 border-dashed border-gray-300 rounded-2xl p-12 shadow-inner text-center max-w-lg">
            <h2 className="text-3xl font-bold text-gray-700 animate-pulse">
              🚧 Clubs & Courts Coming Soon 🚧
            </h2>
            <p className="text-gray-500 mt-4">
              We’re setting up the best pickleball clubs and courts near you.  
              Stay tuned for updates and locations!
            </p>
          </div>
        </main>
      </section>
    </div>
  );
};

export default ClubsAndCourts;
