const AddModal = () => {
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
          <h3 className="font-bold text-lg text-center mb-4">Add a Task</h3>
          <form>
            <input
              type="text"
              maxLength={50}
              placeholder="Task Title (max 50 char.)"
              className="input input-bordered mb-3 input-info w-full"
            />
            <textarea 
            maxLength={200}
            className="textarea w-full textarea-info" 
            placeholder="Task description (max 200 char.)"></textarea>
            <button className="btn btn-block btn-info text-white mt-3">Add Task</button>
          </form>
        </div>
      </dialog>
    </div>
  );
};

export default AddModal;
