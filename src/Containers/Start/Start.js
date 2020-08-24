import React from "react";
import { Route } from "react-router-dom";
import img from "../../logo.svg";
import "./Start.css";
import ProjectList from "../ProjectList/ProjectList";
import Todo from "../Todo/Todo"

const Start = () => {
  return (
    <div className="Start">
      <div className="Start-header">
        <img className="Start-logo" src={img} alt = "React-Img"/>
        <h1>Welcome to my collection of mini projects</h1>
        <Route path="/" exact component={ProjectList} />
        <Route path="/Todo" exact component = {Todo} />
      </div>
    </div>
  );
};

export default Start;
