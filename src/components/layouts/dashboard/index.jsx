import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

function DashboardLayout({ children }) {
  return (
    <main className="container-2xl">
      <div className="h-full w-full">
        <Sidebar />
        <div className="sm:ml-64 bg-[#F9FAFB] h-screen overflow-y-auto">
          <Header />
          {children}
        </div>
      </div>
    </main>
  );
}
export default DashboardLayout;
