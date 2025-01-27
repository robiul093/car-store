import { NavLink } from "react-router-dom"

export default function NavBar() {

    const links = [
        {
            name: 'Home',
            path: '/',
        },
        // <NavLink to='/'><a>Home</a></NavLink>,
    ]

    return (
        <div className="navbar rounded-lg bg-base-100 shadow-sm">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content font-medium text-[16px] space-x-4 bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {
                            links.map((item) => <NavLink key={item.path} to={item.path}>{item.name}</NavLink>)
                        }
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">daisyUI</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu space-x-4 font-medium text-[16px] menu-horizontal px-1">
                    {
                        links.map((item) => <NavLink key={item.path} to={item.path}>{item.name}</NavLink>)
                    }
                </ul>
            </div>
            <div className="navbar-end space-x-3">
                <NavLink className="btn rounded-sm" to='/login'>Login</NavLink>
                <NavLink className="btn rounded-sm" to='/register'>Register</NavLink>
            </div>
        </div>
    )
}
