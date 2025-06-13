import { use } from "react";
import { NavLink } from "react-router";
import logo from "../../assets/Logo/logo.png";
import { AuthContext } from "../../Context/AuthContext/AuthContext";
import ThemeToggleButton from "../../Context/ThemeContext/ThemeToggleButton";

const Navbar = () => {
  const { user, signOutUser } = use(AuthContext);

  const handleSignOut = () => {
    signOutUser()
      .then(() => {
        console.log("logout successfully");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const links = (
    <>
      <li className="font-extrabold text-purple-500 mr-10">
        <NavLink to="/">Home</NavLink>
      </li>
      <li className="font-extrabold text-orange-400 mr-10">
        <NavLink to="/allfood">All Food</NavLink>
      </li>
      <li className="font-extrabold text-lime-400 mr-10">
        <NavLink to="/gallery">Gallery</NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar bg-gradient-to-r from-gray-800 via-indigo-900 to-purple-900 shadow-sm px-5">
      <div className="navbar-start">
        <div className="dropdown">
          <button
            tabIndex={0}
            aria-label="Toggle menu"
            aria-expanded="false"
            role="button"
            className="btn btn-ghost lg:hidden"
          >
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
          </button>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <div className="flex items-center gap-2">
          <img src={logo} className="w-16 h-16" />
          <div>
            <h2 className="font-bold text-3xl text-white">Bite & Bliss</h2>
            <p className="text-sm text-gray-400 font-bold">
              Taste the Difference.
            </p>
          </div>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="flex flex-col sm:flex-row gap-3 items-center navbar-end">
        <ThemeToggleButton></ThemeToggleButton>
        {user ? (
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img
                  alt="User profile"
                  src={
                    user?.photoURL ||
                    "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                  }
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <NavLink to="/myfood">My Foods</NavLink>
              </li>
              <li>
                <NavLink to="/addFood">Add Food</NavLink>
              </li>
              <li>
                <NavLink to="/myorders">My Orders</NavLink>
              </li>
              <li onClick={handleSignOut}>
                <NavLink to="/login">Logout</NavLink>
              </li>
            </ul>
          </div>
        ) : (
          <>
            <NavLink
              to="/register"
              className="btn btn-soft btn-warning w-full sm:w-auto"
            >
              Register
            </NavLink>
            <NavLink
              to="/login"
              className="btn btn-soft btn-success w-full sm:w-auto"
            >
              Login
            </NavLink>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
