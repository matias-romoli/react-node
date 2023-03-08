import { listTaskAll } from "../../utils/xfunction";
import { useState, useEffect } from "react";
import Typed from "react-typed";
import Task from "./task";
import Form from "./form";

function Main({ color }) {
  const [stateModal, setStateModal] = useState(false);
  const [listTask, setLisTask] = useState([]);
  const [act, setAct] = useState(false);
  const [task, setTask] = useState("");

  async function listAll() {
    try {
      const res = await listTaskAll();
      const data = await res.json();
      setLisTask(data);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    listAll();
    setAct(false);
  }, [act]);

  return (
    <>
      <main className="main flex">
        <div className={`container-main-${color} flex`}>
          <Typed
            className={`typed-${color}`}
            strings={["Just do it."]}
            typeSpeed={60}
          />
        </div>
        <div className="form-main flex">
          <Form color={color} task={task} setTask={setTask} setAct={setAct} />
          {listTask.map((data) => (
            <Task
              key={data.id}
              data={data}
              color={color}
              setAct={setAct}
              stateModal={stateModal}
              setStateModal={setStateModal}
            />
          ))}
          {!listTask.length ? (
            <div className={`notTask-${color} flex`}>
              <p> There are no tasks.</p>
            </div>
          ) : null}
        </div>
      </main>
    </>
  );
}

export default Main;
