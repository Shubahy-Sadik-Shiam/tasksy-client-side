
import AddModal from "./components/AddModal";
import Todo from "./components/Todo";
import Inprogress from "./components/Inprogress";
import Done from "./components/Done";

const Tasks = () => {
  return (
    <div className="w-10/12 mx-auto pt-28">
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
       <Todo></Todo>
        <Inprogress></Inprogress>
       <Done></Done>
      </div>
      <AddModal></AddModal>
    </div>
  );
};

export default Tasks;
