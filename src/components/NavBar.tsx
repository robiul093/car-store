import { NavLink, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../redux/hook";
import { logOut } from "../redux/features/auth/authSlice";
import { useEffect, useState } from "react";

export default function NavBar() {
  const links = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "All Products",
      path: "/products",
    },
    {
      name: "About",
      path: "/about",
    },
    {
      name: "Dashboard",
      path: "/dashboard",
    },
  ];

  const user = useAppSelector((state) => state.auth.user);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const userName = user?.name;
  const [scrolled, setScrolled] = useState(false);

  const handelLogout = () => {
    dispatch(logOut());
    navigate("/login");
  };

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    document.addEventListener('scroll', handleScroll, { passive: true });
    return () => document.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  return (
    <div className={`navbar md:px-6 bg-[#202020] shadow-sm mb-2 fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? "py-2 bg-opacity-95" : "py-4"
    }`}>
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content font-medium text-[16px] space-x-4 bg-gray-400 rounded-box z-1 mt-3 w-52 p-2 shadow text-black"
          >
            {links.map((item) => (
              <li key={item.path}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    isActive
                      ? "text-white border-b-2 border-b-green-400 px-3 py-1 font-semibold"
                      : "hover:bg-gray-100 hover:text-black px-3 py-1 rounded"
                  }
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl text-white">LUXED</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu space-x-6 font-medium text-[16px] menu-horizontal px-1 text-white">
          {links.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                isActive
                  ? "text-white border-b-2 border-b-green-400 px-3 py-1 font-semibold"
                  : "hover:bg-gray-100 hover:text-black px-3 py-1 rounded"
              }
            >
              {item.name}
            </NavLink>
          ))}
        </ul>
      </div>
      <div className="navbar-end space-x-3">
        {user ? (
          <div className="avatar dropdown dropdown-hover dropdown-bottom dropdown-end">
            <div tabIndex={0} className="w-12 rounded-full ">
              <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content menu bg-base-100 rounded-box z-1 w-32 p-2 shadow-sm text-center"
            >
              <li>
                <a>{userName}</a>
              </li>
              <li onClick={() => handelLogout()}>
                <a>Logout</a>
              </li>
            </ul>
          </div>
        ) : (
          <div className="space-x-3">
            <NavLink
              className="btn border-0 rounded-sm bg-[#03995B] text-white"
              to="/login"
            >
              Login
            </NavLink>
            <NavLink
              className="btn border-0 rounded-sm text-[#03995B] "
              to="/register"
            >
              Register
            </NavLink>
          </div>
        )}
      </div>
    </div>
  );
}