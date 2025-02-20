import bg from "../assets/bg.jpg"
import Login from "./Login";
const Banner = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage:
          `url(${bg})`,
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="">
          <h1 className="mb-5 text-5xl font-bold leading-tight">Manage Your Tasks <br /> Anytime, Anywhere</h1>
          <p className="mb-5">
          Manage your tasks like a pro with Tasksy! Effortlessly add, edit, and reorder tasks with a smooth drag-and-drop interface. <br /> Stay in control with real-time syncing, a minimalist design, and seamless organization across all your devices. Turn your to-do list into done!
          </p>
          <button onClick={() => document.getElementById("my_modal_3").showModal()} className="btn btn-info w-40 text-white">Get Started</button>
        </div>
      </div>
      <Login></Login>
    </div>
  );
};

export default Banner;
