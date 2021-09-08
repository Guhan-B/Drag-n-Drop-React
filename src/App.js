import React from "react";
import { FaGripLines } from "react-icons/fa";
import { FiArrowRight } from "react-icons/fi";
import { v4 as uuid } from "uuid";

function App() {
  const [tasks, setTasks] = React.useState([]);

  React.useEffect(() => {
    const localTasks = localStorage.getItem("tasks");
    if (localTasks) {
      setTasks(JSON.parse(localTasks));
    }
  }, []);



  const swapTasks = (from, to) => {
    const updatedTasks = [...tasks];
    const temp = updatedTasks[from];
    updatedTasks[from] = updatedTasks[to];
    updatedTasks[to] = temp;
    setTasks(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
  }

  const [startIndex, setStartIndex] = React.useState(-1);
  const [newTask, setNewTask] = React.useState("");

  const onChange = (e) => {
    setNewTask(e.target.value);
  }

  const addTask = (e) => {
    e.preventDefault();

    if (newTask) {
      const updatedTasks = [...tasks, { id: uuid(), title: newTask }];
      setTasks(updatedTasks);
      setNewTask("");
      localStorage.setItem("tasks", JSON.stringify(updatedTasks));
    }
  }

  const deleteTask = (id) => {
    const updatedTasks = tasks.filter(task => task.id !== id);
    setTasks(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
  }

  return (
    <div className="container">
      <form className="glass-effect" onSubmit={addTask}>
        <input type="text" value={newTask} onChange={onChange} placeholder="Add Your Task..." />
        <span className={newTask ? "visible" : "hidden"}>
          <FiArrowRight size={22} color="#555555" />
        </span>
      </form>
      <ul className="draggable-list glass-effect">
        {
          tasks.map((task, index) =>
            <ListItem swap={swapTasks} key={task.id} index={index} task={task} onDelete={deleteTask} start={startIndex} setStart={setStartIndex} />
          )
        }
      </ul>
    </div>
  );
}

const ListItem = ({ index, task, onDelete, start, setStart, swap }) => {
  const [isOver, setIsOver] = React.useState(false);

  const onDragOver = (e) => {
    e.preventDefault();
  }

  const onDragEnter = (e) => {
    setIsOver(true);
  }

  const onDragLeave = (e) => {
    setIsOver(false);
  }

  const onDrop = (e) => {
    setIsOver(false);
    swap(start, index);
  }

  const onDragStart = (e) => {
    setStart(index);
  }

  const onContextMenu = (e) => {
    e.preventDefault();
    onDelete(task.id);
  }

  const events = {
    onDragEnter,
    onDragLeave,
    onDragOver,
    onDrop,
    onContextMenu,
  };

  return (
    <li {...events} className={isOver ? "over" : ""}>
      <span>{index + 1}</span>
      <div onDragStart={onDragStart} draggable="true">
        <p>{task.title}</p>
        <FaGripLines color="#555555" />
      </div>
    </li>
  )
}

export default App;
