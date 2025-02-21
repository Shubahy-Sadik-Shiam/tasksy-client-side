import axios from "axios";
import { FaEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const TaskCard = ({ task, refetch }) => {

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Delete!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const res = await axios.delete(`https://tasksy-server.vercel.app/task/${id}`);
        // console.log(res.data);
        if (res.data.deletedCount > 0) {
          Swal.fire({
            title: "Deleted!",
            text: "Task has been deleted",
            icon: "success",
          });
          refetch();
        }
      }
    });
  };

  return (
    <div className="card bg-base-100 shadow-md rounded-lg">
      <div className="py-3 px-4">
        <p className="text-lg font-semibold">{task.title}</p>
        <p className="mb-2">{task.description}</p>
        <div className="flex items-center justify-between">
          <div className="flex gap-2 items-center">
            <div>
            <Link to={`/updateTask/${task._id}`}>
            <button>
              <FaEdit className="text-xl text-info"/>
            </button>
            </Link>
            </div>
           <div>
           <button onClick={()=>handleDelete(task._id)}>
              <MdDeleteForever className="text-2xl text-red-600" />
            </button>
           </div>
          </div>
          <p className="text-sm">{task.time}</p>
        </div>
      </div>
    </div>
  );
};

export default TaskCard;
