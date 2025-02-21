const UpdateModal = ({ task }) => {
  // console.log(task);
  return (
    <div>
      {/* You can open the modal using document.getElementById('ID').showModal() method */}
      {/* <button
        className="btn"
        onClick={() => document.getElementById("my_modal_3").showModal()}
      >
        open modal
      </button> */}
      <dialog id="my_modal_4" className="modal">
        <div className="modal-box">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <h3 className="font-bold text-lg text-center mb-4">Edit your Task</h3>
          <form>
            <input
              defaultValue={task.title}
              type="text"
              maxLength={50}
              placeholder="Task Title (max 50 char.)"
              className="input input-bordered mb-3 input-info w-full"
            />
            <textarea
              defaultValue={task.description}
              maxLength={200}
              className="textarea w-full textarea-info"
              placeholder="Task description (max 200 char.)"
            ></textarea>
            <select
              defaultValue={task.category}
              name="category"
              required
              className="select select-info w-full mt-2"
            >
              <option disabled>Select Task Category</option>
              <option>To-Do</option>
              <option>In-Progress</option>
              <option>Done</option>
            </select>
            <button className="btn btn-block btn-info text-white mt-3">
              Add Task
            </button>
          </form>
        </div>
      </dialog>
    </div>
  );
};

export default UpdateModal;
