import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import TaskCard from "./TaskCard";

const Done = () => {
  const { user } = useContext(AuthContext);
  const { data: done = [], refetch } = useQuery({
    queryKey: ["done"],
    queryFn: async () => {
      const res = await axios.get(
        `https://tasksy-server.vercel.app/tasks/${user?.email}/Done`
      );
      return res.data;
    },
  });
  return (
    <div className="bg-gray-100 p-4">
      <p className="font-semibold mb-5">Done</p>
      <div className="space-y-3 max-h-[500px] overflow-y-auto p-2">
        {done.map((task) => (
          <TaskCard key={task._id} task={task} refetch={refetch}></TaskCard>
        ))}
      </div>
    </div>
  );
};

export default Done;
