import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import Swal from "sweetalert2";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { googleLogin } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = () => {
    googleLogin()
      .then((res) => {
        navigate("/tasks");
        document.getElementById("my_modal_3").close();
        const userInfo = {
          email: res.user?.email,
          name: res.user?.displayName,
        };
        axios
          .post("https://tasksy-server.vercel.app/users", userInfo)
          .then((res) => {
            // console.log(res.data);
            if (res.data.insertedId) {
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
                title: "Signed in Successful",
              });
            }
          });
      })
      .catch((error) => {
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
          icon: "error",
          title: "Something went wrong",
        });
      });
  };

  return (
    <div>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <h3 className="font-bold text-2xl text-center mb-5 text-info">
            Login To Get Started
          </h3>
          <div className="flex justify-center">
            <button onClick={handleLogin} className="btn btn-info text-white">
              Login with Google
            </button>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default Login;
