import React, { createContext, useContext, useState } from "react";

const TodoContext = createContext({
  tasks: [],
  addTask: () => {},
  removeTask: () => {},
  completeTask: () => {},
  cartItems: [],
  removeItemFromCart: () => {},
});

export const TodoProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  const addTask = (taskText) => {
    const newTask = {
      id: Date.now(),
      text: taskText,
      completed: false,
    };
    setTasks((prevTasks) => [...prevTasks, newTask]);
  };

  const removeTask = (taskId) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
  };

  const completeTask = (taskId) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const removeItemFromCart = (itemId) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
  };

  const value = {
    tasks,
    addTask,
    removeTask,
    completeTask,
    cartItems,
    removeItemFromCart,
  };

  return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>;
};

export const useTodoContext = () => useContext(TodoContext);

export default TodoContext;
