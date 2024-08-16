import React, { useState } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import avatarImg from '../../../assets/images/placeholder.jpg'

const Navbar = () => {
  const { user, logOut } = useAuth()
  const [isOpen, setIsOpen] = useState(false);

  // const navItems = (
  //   <>
  //     <NavLink to="/">
  //       <li>
  //         <a>Home</a>
  //       </li>
  //     </NavLink>
  //     <NavLink to="/all-classes">
  //       <li>
  //         <a>All Classes</a>
  //       </li>
  //     </NavLink>
  //     <NavLink to="/instructor">
  //       <li>
  //         <a>Teach on SkillTrack</a>
  //       </li>
  //     </NavLink>
  //   </>
  // );

    return (
      <div className=" navbar fixed max max-w-7xl bg-white z-10 shadow-sm">
      <div className="navbar bg-base-100">
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
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {/* {navItems} */}
            </ul>
          </div>
          {/* <Link to="/">
            <img className="w-16 rounded-md mr-5" src="/logo1.png" alt="" />
          </Link> */}
          <Link to="/">
            <a className=" text-4xl font-medium">SmartShopper</a>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          {/* <ul className="menu menu-horizontal px-1">{navItems}</ul> */}
        </div>
        <div className="navbar-end">
          
        </div>

        <div
          onClick={() => setIsOpen(!isOpen)}
          className=" p-4 md:py-1 md:px-2 border-[1px] border-neutral-200 flex flex-row items-center gap-3 rounded-full cursor-pointer hover:shadow-md transition"
        >
          <AiOutlineMenu />
          <div className="hidden md:block">
            {/* Avatar */}
            <img
              className="rounded-full"
              referrerPolicy="no-referrer"
              src={user && user.photoURL ? user?.photoURL : avatarImg}
              alt="profile"
              height="30"
              width="30"
            />
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="absolute rounded-xl shadow-md w-[40vw] md:w-[10vw] bg-white overflow-hidden right-0 top-12 text-sm">
          <div className="flex flex-col cursor-pointer">
            <Link
              to="/"
              className="block md:hidden px-4 py-3 hover:bg-neutral-100 transition font-semibold"
            >
              Home
            </Link>

            {user ? (
              <>
              <Link
              to="/dashboard"
              className="block  px-4 py-3 hover:bg-neutral-100 transition font-semibold"
            >
            Dashboard
            </Link>
                <div
                  onClick={logOut}
                  className="px-4 py-3 hover:bg-neutral-100 transition font-semibold cursor-pointer"
                >
                  Logout
                </div>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  className="px-4 py-3 hover:bg-neutral-100 transition font-semibold"
                >
                  Login
                </Link>
                <Link
                  to="/signup"
                  className="px-4 py-3 hover:bg-neutral-100 transition font-semibold"
                >
                  Sign Up
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
    


export default Navbar;