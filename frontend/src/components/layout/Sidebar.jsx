import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const linkClass =
    "block px-4 py-2 rounded hover:bg-zinc-800 text-sm";//block of padding of round corner and hovering effect that create shadow when curser take over it 

  const activeClass = "bg-zinc-800";

  return (
    <div className="w-56 bg-zinc-900 p-4 flex flex-col gap-2">
      <h2 className="text-lg font-semibold mb-4">--MenuBar--</h2>

      <NavLink
        to="/"
        className={({ isActive }) =>
          `${linkClass} ${isActive ? activeClass : ""}`
        }
      >
        Dashboard
      </NavLink>
      <NavLink
        to="/stages"
        className={({ isActive }) =>
          `${linkClass} ${isActive ? activeClass : ""}`
        }
      >
        Stages
      </NavLink>
      <NavLink
        to="/import-export"
        className={({ isActive }) =>
          `${linkClass} ${isActive ? activeClass : ""}`
        }
      >
        Import/Export
      </NavLink>
      <NavLink
        to="/admin"
        className={({ isActive }) =>
          `${linkClass} ${isActive ? activeClass : ""}`
        }
      >
        Admin
      </NavLink>
    </div>
  );
};

export default Sidebar;