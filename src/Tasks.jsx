import Todo from "./components/Todo";
import Inprogress from "./components/Inprogress";
import Done from "./components/Done";
import { closestCorners, DndContext } from "@dnd-kit/core";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { useContext, useState } from "react";
import { AuthContext } from "./provider/AuthProvider";

const Tasks = () => {
  const { user } = useContext(AuthContext);

  const {
    data = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["data"],
    queryFn: async () => {
      const res = await axios.get(
        `https://tasksy-server.vercel.app/tasks/${user?.email}`
      );
      return res.data;
    },
  });

  const handleDragEnd = async (event) => {
    const { active, over } = event;

    if (!over) return;

    const taskId = active.id;
    const newCategory = over.id; // This will be "To-Do", "In Progress", or "Done"

    try {
      // Update the task category in the backend
      await axios.put(`https://tasksy-server.vercel.app/task/${taskId}`, {
        category: newCategory,
      });
      refetch();
    } catch (error) {
      console.error("Error updating task category:", error);
    }
  };
  return (
    <DndContext collisionDetection={closestCorners} onDragEnd={handleDragEnd}>
      <div className="w-10/12 mx-auto pt-28">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 relative">
          <Todo
            tasks={data.filter((task) => task.category === "To-Do")}
            refetch={refetch}
            isLoading={isLoading}
          ></Todo>
          <Inprogress
            tasks={data.filter((task) => task.category === "In-Progress")}
            refetch={refetch}
            isLoading={isLoading}
          ></Inprogress>
          <Done
            tasks={data.filter((task) => task.category === "Done")}
            refetch={refetch}
            isLoading={isLoading}
          ></Done>
        </div>
      </div>
    </DndContext>
  );
};

export default Tasks;
