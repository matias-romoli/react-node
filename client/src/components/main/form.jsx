import { ToastContainer, toast } from "react-toastify";
import { registerTask } from "../../utils/xfunction";
import "react-toastify/dist/ReactToastify.css";

function Form({ color, task, setTask, setAct }) {
  async function onSubmitTask(e) {
    e.preventDefault();
    try {
      const res = await registerTask(task);
      if (res.status === 500) {
        toast.error(await res.json(), {
          position: "top-right",
          autoClose: 2500,
        });
      }

      const data = await res.json();
      toast.success(data.message, {
        position: "top-right",
        autoClose: 2500,
      });
      setTask("");
      setAct(true);
    } catch (error) {
      return console.log(error);
    }
  }
  return (
    <>
      <ToastContainer />
      <form
        className={`form-${color} flex`}
        action="POST"
        onSubmit={onSubmitTask}
      >
        <input
          type="text"
          name="newTask"
          value={task}
          placeholder="Add a task."
          onChange={(event) => {
            setTask(event.target.value);
          }}
          autoComplete="off"
        />
        <input type="submit" value="I Got This" />
      </form>
    </>
  );
}
export default Form;
