import { Link } from "react-router-dom";
import Login from "./Login";

const Navbar = () => {
    return (
        <div className="navbar fixed z-10 px-10">
        <div className="navbar-start">
          <Link to="/" className="text-4xl text-white font-bold font-serif">Tasksy</Link>
        </div>
        <div className="navbar-center hidden lg:flex"></div>
        <div className="navbar-end">
          <button onClick={() => document.getElementById("my_modal_3").showModal()} className="btn">Login</button>
        </div>
        <Login></Login>
      </div>
    );
};

export default Navbar;