import React from "react";
import { NavLink } from "react-router";

const Navbar = () => {

  const links = <>
  <li className="font-extrabold text-purple-500 mr-10"><NavLink to="/">Home</NavLink></li>
  <li className="font-extrabold text-orange-400 mr-10"><NavLink to="/allfood">All Food</NavLink></li>
  <li className="font-extrabold text-lime-400 mr-10"><NavLink to="/gallery">Gallery</NavLink></li>

  </>

  return (
    <div className="navbar bg-base-100 shadow-sm px-5">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
          <div className="">
            <h2 className="font-bold text-3xl text-indigo-400">Bite & Bliss</h2>
            <p className="text-sm text-gray-500 font-bold">Taste the Difference.</p>
          </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {links}
        </ul>
      </div>
      <div className="gap-5 navbar-end">
        <NavLink to="/register" className="btn btn-soft btn-warning">Register</NavLink>
        <NavLink to="/login" className="btn btn-soft btn-success">Login</NavLink>
      </div>
    </div>
  );
};

export default Navbar;
