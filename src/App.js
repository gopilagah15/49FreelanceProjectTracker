import React, { useState } from 'react';  
import ProjectInput from './components/ProjectInput';
import ProjectList from './components/ProjectList';
import InvoiceTracker from './components/InvoiceTracker';
import ReportSummary from './components/ReportSummary';

const App = () => {
  const [projects, setProjects] = useState([]);
  const [invoices, setInvoices] = useState([]);

  // Add a new project with its details
  const addProject = (name, hours, deliverable, deadline) => {
    const newProject = {
      id: projects.length + 1,
      name,
      hours: parseFloat(hours) || 0,
      deliverable,
      deadline,
    };
    setProjects([...projects, newProject]);
  };

  // Add or update an invoice
  const addInvoice = (projectId, amount, isPaid) => {
    const newInvoice = {
      id: invoices.length + 1,
      projectId,
      amount: parseFloat(amount) || 0,
      isPaid,
    };
    setInvoices([...invoices, newInvoice]);
  };

  return (
    <div className="App">
      <h1>Freelance Project Tracker</h1>
      <ProjectInput addProject={addProject} />
      <ProjectList projects={projects} />
      <InvoiceTracker projects={projects} addInvoice={addInvoice} invoices={invoices} />
      <ReportSummary projects={projects} invoices={invoices} />
    </div>
  );
};

export default App;
