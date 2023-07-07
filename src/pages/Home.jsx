import React from "react";
import "../styles/Home.css";

const Home = () => {
  return (
    <div className="home-container">
      <h2 className="home-title">Shopping Cart</h2>
      <p className="home-description">
        Welcome to the Shopping Cart App. This application allows you to manage
        your tasks and keep track of your shopping items.
      </p>
      <p className="home-cta">
        Get started by navigating to the different pages using the navigation
        above.
      </p>
    </div>
  );
};

export default Home;
