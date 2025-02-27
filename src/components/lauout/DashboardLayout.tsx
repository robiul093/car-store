import { NavLink, Outlet } from "react-router-dom";
import { useAppSelector } from "../../redux/hook";

export default function DashboardLayout() {
    const user = useAppSelector((state) => state.auth.user);
    const isAdmin = user?.role === "admin";

    return (
        <div className="md:flex h-screen">
            {/* Sidebar */}
            <div className="md:w-64 bg-gray-800 text-white p-5 rounded-2xl">
                <h2 className="text-xl font-bold mb-5">Dashboard</h2>
                <ul className="space-y-3">
                    {isAdmin ? (
                        <>
                            <li className="hover:bg-white hover:text-black/80 p-2 rounded-2xl">
                                <NavLink to="/dashboard/admin/manage-users">Manage Users</NavLink>
                            </li>
                            <li className="hover:bg-white hover:text-black/80 p-2 rounded-2xl">
                                <NavLink to="/dashboard/admin/manage-products">Manage Products</NavLink>
                            </li>
                            <li className="hover:bg-white hover:text-black/80 p-2 rounded-2xl">
                                <NavLink to="/dashboard/admin/manage-orders">Manage Orders</NavLink>
                            </li>
                        </>
                    ) : (
                        <>
                            <li className="hover:bg-white hover:text-black/80 p-2 rounded-2xl">
                                <NavLink to="/dashboard/user/profile">Profile</NavLink>
                            </li>
                            <li className="hover:bg-white hover:text-black/80 p-2 rounded-2xl">
                                <NavLink to="/dashboard/user/orders">Orders</NavLink>
                            </li>
                            <li className="hover:bg-white hover:text-black/80 p-2 rounded-2xl">
                                <NavLink to="/dashboard/user/update-password">Update Password</NavLink>
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
