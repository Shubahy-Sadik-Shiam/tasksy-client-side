import axios from "axios";
import moment from "moment";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import Swal from "sweetalert2";

const AddTask = () => {
  const { user } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const description = form.description.value;
    const category = form.category.value;
    const time = moment().format("lll");
    const email = user?.email;
    const task = { title, description, category, time, email };

    axios.post("https://tasksy-server.vercel.app/tasks", task).then((res) => {
      form.reset();
      const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 1500,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.onmouseenter = Swal.stopTimer;
          toast.onmouseleave = Swal.resumeTimer;
        },
      });
      Toast.fire({
        icon: "success",
        title: "Task Added Successfully",
      });
    });
  };
  return (
    <div className="pt-32">
      <h2 className="text-4xl font-bold text-center"> Add a Task</h2>
      <form
        onSubmit={handleSubmit}
        className="lg:w-4/12 md:w-6/12 w-10/12 mx-auto mt-10"
      >
        <input
          name="title"
          required
          type="text"
          maxLength={50}
          placeholder="Task Title (max 50 char.)"
          className="input input-bordered mb-3 input-info w-full"
        />
        <textarea
          name="description"
          required
          maxLength={200}
          className="textarea w-full textarea-info"
          placeholder="Task description (max 200 char.)"
        ></textarea>
        <select
        defaultValue="Select Task Category"
          name="category"
          required
          className="select select-info w-full mt-2"
        >
          <option disabled>
            Select Task Category
          </option>
          <option>To-Do</option>
          <option>In-Progress</option>
          <option>Done</option>
        </select>
        <button
          type="submit"
          className="btn btn-block btn-info text-white mt-3"
        >
          Add Task
        </button>
      </form>
    </div>
  );
};

export default AddTask;
