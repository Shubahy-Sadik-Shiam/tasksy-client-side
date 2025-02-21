import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import axios from "axios";
import TaskCard from "./TaskCard";

const Inprogress = () => {
  const { user } = useContext(AuthContext);
  const {
    data: inprogress = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["inprogress"],
    queryFn: async () => {
      const res = await axios.get(
        `https://tasksy-server.vercel.app/tasks/${user?.email}/In-Progress`
      );
      return res.data;
    },
  });
  return (
    <div className="bg-gray-100 p-4">
      <p className="font-semibold mb-5 text-xl">In-Progress</p>
      {isLoading && (
        <div className="flex w-52 flex-col gap-4">
          <div className="skeleton h-32 w-full"></div>
          <div className="skeleton h-4 w-28"></div>
          <div className="skeleton h-4 w-full"></div>
          <div className="skeleton h-4 w-full"></div>
          <div className="skeleton h-4 w-full"></div>
          <div className="skeleton h-4 w-full"></div>
          <div className="skeleton h-4 w-full"></div>
          <div className="skeleton h-4 w-full"></div>
          <div className="skeleton h-4 w-full"></div>
          <div className="skeleton h-4 w-full"></div>
          <div className="skeleton h-4 w-full"></div>
          <div className="skeleton h-4 w-full"></div>
        </div>
      )}
      <div className="space-y-3 max-h-[500px] overflow-y-auto p-2">
        {inprogress.map((task) => (
          <TaskCard key={task._id} task={task} refetch={refetch}></TaskCard>
        ))}
      </div>
    </div>
  );
};

export default Inprogress;
