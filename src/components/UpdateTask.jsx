import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateTask = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const {
    data: singleTask = {},
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["singleTask", id],
    queryFn: async () => {
      const res = await axios.get(
        `https://tasksy-server.vercel.app/task/${id}`
      );
      return res.data;
    },
  });

  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const description = form.description.value;
    const category = form.category.value;
    const updatedTask = { title, description, category };

    axios
      .patch(`https://tasksy-server.vercel.app/task/${id}`, { updatedTask })
      .then((res) => {
        if (res.data.modifiedCount > 0) {
          navigate("/tasks");
          refetch();
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
            title: "Task Updated Successfully",
          });
        }
      });
  };
  return (
    <div className="pt-32 min-h-screen">
      {isLoading && (
        <div className="flex justify-center my-4">
          <span className="loading loading-dots loading-lg"></span>
        </div>
      )}
      <h2 className="text-4xl font-bold text-center"> Edit your Task</h2>
      <form
        onSubmit={handleUpdate}
        className="lg:w-4/12 md:w-6/12 w-10/12 mx-auto mt-10"
      >
        <input
          defaultValue={singleTask.title}
          name="title"
          type="text"
          maxLength={50}
          placeholder="Task Title (max 50 char.)"
          className="input input-bordered mb-3 input-info w-full"
        />
        <textarea
          defaultValue={singleTask.description}
          name="description"
          maxLength={200}
          className="textarea w-full textarea-info"
          placeholder="Task description (max 200 char.)"
        ></textarea>
        <select
          defaultValue={singleTask.category}
          name="category"
          required
          className="select select-info w-full mt-2"
        >
          <option disabled>Select Task Category</option>
          <option>To-Do</option>
          <option>In-Progress</option>
          <option>Done</option>
        </select>
        <button
          type="submit"
          className="btn btn-block btn-info text-white mt-3"
        >
          Update Task
        </button>
      </form>
    </div>
  );
};

export default UpdateTask;
