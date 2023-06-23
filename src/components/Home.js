import React from "react";
import { Link } from "react-router-dom";
import BackImage from "../assets/pizza.jpeg";
import "../styles/Home.css";
export default function Home() {
  return (
    <div className="home">
      <div
        className="headerContainer"
        // style={{ backgroundImage: `url(${BackImage})` }}
      >
        <h1>Nepa Restro</h1>
        <p>Try once, Repeat everyday</p>
        <Link to="/menu">
          <button>Order now</button>
        </Link>
      </div>
    </div>
  );
}
