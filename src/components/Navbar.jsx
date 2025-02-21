import { Link, NavLink, useLocation } from "react-router-dom";
import Login from "./Login";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import Swal from "sweetalert2";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const location = useLocation();
  const isNotHomePage = location.pathname !== "/";

  const handleLogOut = () => {
    Swal.fire({
      title: "Are you sure you want to logout?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Log out",
    }).then((result) => {
      if (result.isConfirmed) {
        logOut().then((res) => {
          const Toast = Swal.mixin({
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 2000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.onmouseenter = Swal.stopTimer;
              toast.onmouseleave = Swal.resumeTimer;
            },
          });
          Toast.fire({
            icon: "success",
            title: "See you again soon!",
          });
        });
      }
    });
  };
  return (
    <div
      className={`navbar fixed z-10 md:px-10 ${
        isNotHomePage ? "bg-info" : "bg-transparent"
      }`}
    >
      <div className="navbar-start">
        <div className="dropdown text-white">
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
            className="menu menu-sm dropdown-content bg-black bg-opacity-40 backdrop-blur-md rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            {user && (
             <>
              <li>
                <NavLink to="/tasks">Tasks</NavLink>
              </li>
              <li>
                <NavLink to="/addTask">Add Task</NavLink>
              </li>
             </>
            )}
          </ul>
        </div>
        <Link to="/" className="text-4xl text-white font-bold font-serif">
          Tasksy
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-white text-lg">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          {user && (
             <>
              <li>
                <NavLink to="/tasks">Tasks</NavLink>
              </li>
              <li>
                <NavLink to="/addTask">Add Task</NavLink>
              </li>
             </>
            )}
        </ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <>
            <div className="flex items-center gap-2">
              <img
                className="w-14 h-14 mr-2 rounded-full object-cover"
                src={user?.photoURL}
                alt=""
              />
              <button onClick={handleLogOut} className="btn">
                Log Out
              </button>
            </div>
          </>
        ) : (
          <button
            onClick={() => document.getElementById("my_modal_3").showModal()}
            className="btn"
          >
            Login
          </button>
        )}
      </div>
      <Login></Login>
    </div>
  );
};

export default Navbar;
