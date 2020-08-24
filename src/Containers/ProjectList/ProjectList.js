import React from "react";
import Project from "../../Components/Project/Project";
import "./ProjectList.css";

const ProjectList = () => {
  const Projects = [
    {
      id: 1,
      projectName: "Todo",
    },
    {
      id: 2,
      projectName: "Counter",
    },
  ];

  return (
    <div className="ProjectList">
      <ul>
        {Projects.map((item) => (
          <Project key = {item.id} props={item} />
        ))}
      </ul>
    </div>
  );
};

export default ProjectList;
