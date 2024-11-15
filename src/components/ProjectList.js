import React from 'react';

const ProjectList = ({ projects }) => (
  <div>
    <h2>Project List</h2>
    <ul>
      {projects.map((project) => (
        <li key={project.id}>
          {project.name}: {project.hours} hours, Deliverable: {project.deliverable}, Deadline: {project.deadline}
        </li>
      ))}
    </ul>
  </div>
);

export default ProjectList;
