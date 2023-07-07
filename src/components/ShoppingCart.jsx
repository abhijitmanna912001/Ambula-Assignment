import React from "react";
import { useTodoContext } from "../context/TodoContext";
import "../styles/ShoppingCart.css";

const ShoppingCart = () => {
  const { tasks, addTask, removeTask } = useTodoContext();

  const handleAddToCart = (taskText) => {
    addTask(taskText);
  };

  const handleRemoveFromCart = (taskId) => {
    removeTask(taskId);
  };

  const calculateSubtotal = () => {
    // Calculate the subtotal based on the tasks in the cart
    return tasks.length * 10; // Replace with your own calculation logic
  };

  return (
    <div className="shopping-cart-container">
      <h2>Shopping Cart</h2>
      {tasks.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul className="cart-items">
            {tasks.map((task) => (
              <li key={task.id}>
                <span>{task.text}</span>
                <button onClick={() => handleRemoveFromCart(task.id)}>
                  Remove
                </button>
              </li>
            ))}
          </ul>

          <div className="cart-summary">
            <p>Total Items: {tasks.length}</p>
            <p>Subtotal: ${calculateSubtotal()}</p>
          </div>
        </>
      )}

      <div className="product-list">
        <h3>Product List</h3>
        <ul>
          <li>
            <span>Product 1</span>
            <button onClick={() => handleAddToCart("Product 1")}>
              Add to Cart
            </button>
          </li>
          <li>
            <span>Product 2</span>
            <button onClick={() => handleAddToCart("Product 2")}>
              Add to Cart
            </button>
          </li>
          <li>
            <span>Product 3</span>
            <button onClick={() => handleAddToCart("Product 3")}>
              Add to Cart
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ShoppingCart;
