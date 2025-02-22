import TaskCard from "./TaskCard";
import {useEffect, useState } from "react";
import { useDroppable } from "@dnd-kit/core";

const Todo = ({tasks, refetch, isLoading}) => {
  const [isDark, setIsDark] = useState(localStorage.getItem("theme") === "dark");

  const {isOver, setNodeRef} = useDroppable({
    id: "To-Do"
  })

  useEffect(() => {
    setIsDark(localStorage.getItem("theme") === "dark");
  }, []);

  return (
    <div ref={setNodeRef} className={`${isDark ? "bg-base-300" : "bg-gray-100"} p-4 ${isOver ? "border-2 border-info" : ""}`}>
      <p className="font-semibold mb-5 text-xl">To-Do: {tasks.length}</p>
      {isLoading && (
        <div className="flex flex-col gap-4">
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
        {tasks.map((task) => (
          <TaskCard key={task._id} task={task} refetch={refetch}></TaskCard>
        ))}
      </div>
    </div>
  );
};

export default Todo;
