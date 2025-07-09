import React, { useEffect, useState } from "react";
import "./Todo.css";

export default function Todo() {
  const [tableData, setTableData] = useState([]);
  const [task, setTask] = useState("");

  useEffect(() => {
    try {
      let storage = JSON.parse(localStorage.getItem("todo"));
      if (storage) setTableData(storage);
    } catch (error) {}
  }, []);

  function addTodo() {
    let toadd = {
      checked: false,
      task,
    };
    const dataCopy = [...tableData];
    dataCopy.push(toadd);
    saveTodo(dataCopy);
  }

  function removeTodo(index) {
    const dataCopy = [...tableData];
    dataCopy.splice(index, 1);
    saveTodo(dataCopy);
  }

  function updateTodo(event, index) {
    const dataCopy = [...tableData];
    dataCopy[index].checked = event.target.checked;
    saveTodo(dataCopy);
  }

  function saveTodo(dataCopy) {
    setTableData(dataCopy);
    localStorage.setItem("todo", JSON.stringify(dataCopy));
  }

  return (
    <>
      <div className="container mt-5">
        <div className="controls">
          <div className="input-side">
            <input
              type="text form-control rounded-5"
              id="todo"
              placeholder="Enter your task"
              value={task}
              onChange={(event) => {
                setTask(event.target.value);
              }}
            />
          </div>
          <div className="btn-side">
            <button onClick={addTodo} className="btn btn-primary">
              Add
            </button>
          </div>
        </div>

        <div className="displayData">
          <table>
            <thead>
              <tr>
                <td>Done</td>
                <td>Task</td>
                <td>Delete</td>
              </tr>
            </thead>
            <tbody>
              {tableData.map((todoo, index) => {
                let checked = "";
                let cstyle = "";
                if (todoo.checked) {
                  checked = "checked";
                  cstyle = "ischecked";
                }

                return (
                  <>
                    <tr>
                      <td>
                        <input
                          type="checkbox"
                          checked={checked}
                          onClick={(Event) => {
                            updateTodo(Event, index);
                          }}
                        ></input>
                      </td>
                      <td className={cstyle ? "ischecked" : ""}>
                        {todoo.task}
                      </td>
                      <td>
                        <span
                          className="delbtn"
                          onClick={() => {
                            removeTodo(index);
                          }}
                        >
                          <i className="fa-solid fa-trash"></i>
                        </span>
                      </td>
                    </tr>
                  </>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
