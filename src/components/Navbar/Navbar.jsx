import { NavLink } from "react-router-dom";
import logo from "../../assets/more/logo1.png";

const Navbar = () => {
  const links = (
    <>
      <li>
        <NavLink to="/" className="hover:bg-white hover:text-coffee">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/coffees" className="hover:bg-white hover:text-coffee">
          Coffees
        </NavLink>
      </li>
      <li>
        <NavLink to="/dashboard" className="hover:bg-white hover:text-coffee">
          Dashboard
        </NavLink>
      </li>
    </>
  );

  return (
    <nav className="bg-navbarBg text-white">
      <div className="container navbar mx-auto">
        <div className="navbar-start gap-3">
          <div className="dropdown">
            {/* Drawer Toggle Button */}
            <div className="drawer">
              <input id="my-drawer" type="checkbox" className="drawer-toggle" />
              <div className="drawer-content">
                {/* Drawer content button */}
                <label htmlFor="my-drawer" className="btn btn-ghost lg:hidden">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
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
                </label>
              </div>
              <div className="drawer-side z-50">
                <label
                  htmlFor="my-drawer"
                  className="drawer-overlay"
                  aria-label="close sidebar"
                ></label>
                {/* Sidebar content */}
                <ul className="menu text-base-content min-h-full w-80 p-4 pt-6 bg-base-300">
                  <label
                    className="btn bg-coffee text-coffeeBtn font-extrabold rounded-full h-8 absolute top-0 right-0"
                    title="close"
                    htmlFor="my-drawer"
                    aria-label="close sidebar"
                  >
                    X
                  </label>
                  {/* Links */}
                  <div className="mt-6">{links}</div>
                </ul>
              </div>
            </div>
          </div>

          {/* Logo */}
          <div>
            <img src={logo} alt="Coffee Logo" className="w-8" />
          </div>
          <a className="btn btn-ghost text-xl">Coffee Store</a>
        </div>

        {/* Desktop Navbar */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>

        {/* Login Button */}
        <div className="navbar-end">
          <a className="btn bg-coffeeBtn text-coffee">Login</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
