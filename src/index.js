import React from "react";
import ReactDOM from "react-dom/client";

import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import { TodoProvider } from "./context/TodoContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <TodoProvider>
      <App />
    </TodoProvider>
  </Router>
);
