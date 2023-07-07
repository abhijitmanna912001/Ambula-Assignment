import React from "react";
import { useTodoContext } from "../context/TodoContext";
import "../styles/TodoList.css";

const TodoList = () => {
  const { tasks, addTask, removeTask, completeTask } = useTodoContext();

  const handleAddTask = (event) => {
    event.preventDefault();
    const taskText = event.target.task.value;
    if (taskText.trim() !== "") {
      addTask(taskText);
      event.target.task.value = "";
    }
  };

  const handleCompleteTask = (taskId) => {
    completeTask(taskId);
  };

  const handleRemoveTask = (taskId) => {
    removeTask(taskId);
  };

  return (
    <div className="todo-list-container">
      <form onSubmit={handleAddTask}>
        <input type="text" name="task" placeholder="Enter task" />
        <button type="submit">Add Task</button>
      </form>
      <ul className="task-list">
        {tasks.map((task) => (
          <li
            key={task.id}
            className={`task ${task.completed ? "completed" : ""}`}
          >
            <span>{task.text}</span>
            <div>
              <button onClick={() => handleCompleteTask(task.id)}>
                {task.completed ? "Undo" : "Complete"}
              </button>
              <button onClick={() => handleRemoveTask(task.id)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
