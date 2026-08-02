import useAuth from "../../hooks/useAuth";
import {useNavigate} from "react-router-dom";
import userlogo from "../../assets/userlogo.png"; // Change path if needed

const Navbar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  return (
    <div className="h-16 flex items-center justify-between px-6 bg-zinc-900 border-b border-zinc-800">
      <h1 className="text-lg font-semibold">Welcome to Udyogkart</h1>

      <div className="flex items-center gap-4">
        <div className="flex flex-col items-center">
            <img
              src={userlogo}
              alt="UserLogo"
              className="w-8 h-8 rounded-full object-contain"
            />
            <span className="text-xs text-gray-400 mt-1">
              {user?.email}
            </span>
        </div>
        <button
          onClick={() => navigate("/login")}
          className="bg-blue-600 px-3 py-1 rounded text-sm hover:bg-blue-700 transition"
        >
          Login
        </button>
        <button
          onClick={logout}
          className="bg-red-600 px-3 py-1 rounded text-sm"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Navbar;