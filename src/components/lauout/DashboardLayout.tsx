import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { useAppSelector } from "../../redux/hook";
import { useEffect } from "react";

export default function DashboardLayout() {
  const user = useAppSelector((state) => state.auth.user);
  const isAdmin = user?.role === "admin";
  const navigate = useNavigate();

  useEffect(() => {
    if (isAdmin) {
      navigate("/dashboard/admin/manage-users", { replace: true });
    } else {
      navigate("/dashboard/user/orders", { replace: true });
    }
  }, []);

  return (
    <div className="md:flex h-full">
      {/* Sidebar */}
      <div className="md:w-64 bg-gray-800 text-white p-5 rounded-2xl">
        <h2 className="text-xl font-bold mb-5">Dashboard</h2>
        <ul className="space-y-3 text-start">
          {isAdmin ? (
            <>
              <li className="p-2 ">
                <NavLink
                  to="/dashboard/admin/manage-users"
                  className={({ isActive }) =>
                    isActive
                      ? "text-white border-b-2 border-b-green-400 px-3 pb-1 font-semibold"
                      : "hover:bg-white hover:text-black px-3 py-1 rounded"
                  }
                >
                  Manage Users
                </NavLink>
              </li>
              <li className="p-2">
                <NavLink
                  to="/dashboard/admin/manage-products"
                  className={({ isActive }) =>
                    isActive
                      ? "text-white border-b-2 border-b-green-400 px-3 pb-1 font-semibold"
                      : "hover:bg-white hover:text-black px-3 py-1 rounded"
                  }
                >
                  Manage Products
                </NavLink>
              </li>
              <li className="p-2">
                <NavLink
                  to="/dashboard/admin/manage-orders"
                  className={({ isActive }) =>
                    isActive
                      ? "text-white border-b-2 border-b-green-400 px-3 pb-1 font-semibold"
                      : "hover:bg-white hover:text-black px-3 py-1 rounded"
                  }
                >
                  Manage Orders
                </NavLink>
              </li>
            </>
          ) : (
            <>
              <li className="p-2">
                <NavLink
                  to="/dashboard/user/overview"
                  className={({ isActive }) =>
                    isActive
                      ? "text-white border-b-2 border-b-green-400 px-3 pb-1 font-semibold"
                      : "hover:bg-white hover:text-black px-3 py-1 rounded"
                  }
                >
                  Overview
                </NavLink>
              </li>
              <li className="p-2">
                <NavLink
                  to="/dashboard/user/profile"
                  className={({ isActive }) =>
                    isActive
                      ? "text-white border-b-2 border-b-green-400 px-3 pb-1 font-semibold"
                      : "hover:bg-white hover:text-black px-3 py-1 rounded"
                  }
                >
                  Profile
                </NavLink>
              </li>
              <li className="p-2">
                <NavLink
                  to="/dashboard/user/orders"
                  className={({ isActive }) =>
                    isActive
                      ? "text-white border-b-2 border-b-green-400 px-3 pb-1 font-semibold"
                      : "hover:bg-white hover:text-black px-3 py-1 rounded"
                  }
                >
                  Orders
                </NavLink>
              </li>
              <li className="p-2">
                <NavLink
                  to="/dashboard/user/update-password"
                  className={({ isActive }) =>
                    isActive
                      ? "text-white border-b-2 border-b-green-400 px-3 pb-1 font-semibold"
                      : "hover:bg-white hover:text-black px-3 py-1 rounded"
                  }
                >
                  Update Password
                </NavLink>
              </li>
            </>
          )}
        </ul>
      </div>

      <div className="flex-1 p-5">
        <Outlet />
      </div>
    </div>
  );
}
//   return (
//     <div className="md:flex">
//       <div className="md:w-[30%] bg-amber-500">

//       </div>
//       <div className="md:w-[70%] bg-amber-200"></div>
//     </div>
//   )
// }
