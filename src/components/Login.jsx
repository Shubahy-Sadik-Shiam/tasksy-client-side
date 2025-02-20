const Login = () => {
  return (
    <div>
      {/* You can open the modal using document.getElementById('ID').showModal() method */}
      {/* <button
        className="btn"
        onClick={() => document.getElementById("my_modal_3").showModal()}
      >
        open modal
      </button> */}
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <h3 className="font-bold text-2xl text-center mb-5 text-info">Login To Get Started</h3>
         <div className="flex justify-center">
         <button className="btn btn-info text-white">Login with Google</button>
         </div>
        </div>
      </dialog>
    </div>
  );
};

export default Login;
