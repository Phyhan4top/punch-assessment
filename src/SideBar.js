// SideNav.js
import React, { Fragment, useState } from "react";
import "./App.css"
import { NavLink } from "react-router-dom";
const SideNav = ({user}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSideNav = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Fragment>
      <button className="toggle-btn md:hidden sm:block" onClick={toggleSideNav}>
        &#9776; {/* Hamburger icon */}
      </button>
      <div
        className={`sidenav ${
          isOpen ? "open" : ""
        }  md:hidden sm:block relative right-0 `}
      >
        {user ? (
          <div className="absolute top-0 flex justify-center items-center h-20 text-[13px] text-white">
            <img
              className="nav__user-img "
              src={`/img/users/${user.photo}`}
              alt="User"
            />
            <span>{user.name}</span>
          </div>
        ) : (
          <div className="absolute top-0 flex justify-center items-center h-20 text-[20px] text-white">
            <img
              className="nav__user-img "
              src={`/img/users/default.jpg`}
              alt="User"
            />
            <span>USER</span>
          </div>
        )}

        <nav className="nav-links justify-end">
          <NavLink to="/">ALL TOURS</NavLink>
          {user ? (
            <NavLink to="/user">Account</NavLink>
          ) : (
            <NavLink href="/signup">Create Account</NavLink>
          )}

          {user ? (
            <NavLink
              to={"/logout"}
              className={
                "absolute bottom-0 w-[100%] p-5 bg-green-500 text-center text-white"
              }
            >
              Sign Out{" "}
            </NavLink>
          ) : (
            <NavLink
              to={"/login"}
              className={
                "absolute bottom-0 w-[100%] p-5 bg-green-500 text-center text-white"
              }
            >
              Login{" "}
            </NavLink>
          )}

          <></>
        </nav>
      </div>
    </Fragment>
  );
};

export default SideNav;
