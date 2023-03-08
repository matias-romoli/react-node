import { ToastContainer, toast } from "react-toastify";
import { deleteTask } from "../../utils/xfunction";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";

function Task({ data, color, setAct }) {
  const [isActive, setActive] = useState(false);

  async function handleDelete(id) {
    try {
      const res = await deleteTask(id);
      const data = await res.json();
      toast.success(data.message, {
        position: "top-right",
        autoClose: 2500,
      });
      setAct(true);
    } catch (error) {
      console.log(error);
    }
  }
  function handleSuccess() {
    setActive(!isActive);
  }
  return (
    <>
      <ToastContainer />
      <div className={`task-${color} flex`}>
        <div className="task-h2">
          <h2 className={isActive ? "decoration" : null}> {data.task} </h2>
        </div>
        <div className={`task-span-${color} flex`}>
          <span>
            <ion-icon
              onClick={() => handleSuccess()}
              name="checkmark-circle-outline"
            ></ion-icon>
          </span>
          <span>
            <ion-icon
              onClick={() => handleDelete(data.id)}
              name="close-circle-outline"
            ></ion-icon>
          </span>
        </div>
      </div>
    </>
  );
}

export default Task;
