import React, { useState } from 'react';

const ProjectInput = ({ addProject }) => {
  const [name, setName] = useState('');
  const [hours, setHours] = useState('');
  const [deliverable, setDeliverable] = useState('');
  const [deadline, setDeadline] = useState('');

  const handleSubmit = () => {
    addProject(name, hours, deliverable, deadline);
    setName('');
    setHours('');
    setDeliverable('');
    setDeadline('');
  };

  return (
    <div>
      <h2>Add New Project</h2>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Project Name" />
      <input type="number" value={hours} onChange={(e) => setHours(e.target.value)} placeholder="Hours Worked" />
      <input type="text" value={deliverable} onChange={(e) => setDeliverable(e.target.value)} placeholder="Deliverable" />
      <input type="date" value={deadline} onChange={(e) => setDeadline(e.target.value)} placeholder="Deadline" />
      <button onClick={handleSubmit}>Add Project</button>
    </div>
  );
};

export default ProjectInput;
