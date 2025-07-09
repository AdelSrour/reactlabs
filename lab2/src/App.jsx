import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Users from "./components/Users/Users";
import Todo from "./components/Todo/Todo";

function App() {
  const [currentDisplay, setDisplay] = useState();

  return (
    <>
      <div className="text-center mt-4">
        <h5>Please click on a task</h5>
      </div>
      <div className="mt-2 text-center">
        <button
          className="btn btn-primary"
          onClick={() => {
            setDisplay(<Users />);
          }}
        >
          Users Search Task
        </button>

        <button
          className="btn btn-secondary ms-2"
          onClick={() => {
            setDisplay(<Todo />);
          }}
        >
          Todo Task
        </button>
      </div>
      {currentDisplay}
    </>
  );
}

export default App;
