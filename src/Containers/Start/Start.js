import React from "react";
import { NavLink, Route } from "react-router-dom";
import img from "../../logo.svg";
import './Start.css'
import Todo from '../Todo/Todo'

const Start = () => {
  return (
    <div className="Start">
      <div className="Start-header">
        <img className="Start-logo" src={img} />
        <h1>Welcome to my collection of mini projects</h1>
      </div>
    </div>
  );
};

export default Start;
