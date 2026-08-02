// import Navbar from "./Navbar";
// import Sidebar from "./Sidebar";

// const MainLayout = ({ children, title }) => {
//   return (
//     <div className="flex h-screen bg-black text-white">
//       {/* Sidebar */}
//       <Sidebar />

//       {/* Main Content */}
//       <div className="flex-1 flex flex-col overflow-hidden">
//         {/* Navbar */}
//         <Navbar title={title} />

//         {/* Page Content */}
//         <main className="flex-1 overflow-y-auto bg-black">
//           {children}
//         </main>
//       </div>
//     </div>
//   );
// };

// export default MainLayout;

import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import logo from "../../assets/logo.png"; // Change path if needed

const MainLayout = ({ children, title }) => {
  return (
    <div className="h-screen flex flex-col bg-black text-white">

      {/* ================= HEADER ================= */}
      <div className="h-16 flex">

        {/* Logo */}
        <div className="w-64 h-16 border-r border-b border-gray-700 flex items-center justify-center bg-black">
          <img
            src={logo}
            alt="Company Logo"
            className="h-10 w-auto object-contain"
          />
        </div>

        {/* Navbar */}
        <div className="flex-1 h-16 border-b border-gray-700">
          <Navbar />
        </div>

      </div>

      {/* ================= BODY ================= */}
      <div className="flex flex-1">

        {/* Sidebar */}
        <div className="w-64 border-r border-gray-700 overflow-y-auto bg-black">
          <Sidebar />
        </div>

        {/* Main Content */}
        <main className="flex-1 overflow-y-auto bg-black">
          {children}
        </main>

      </div>

    </div>
  );
};

export default MainLayout;