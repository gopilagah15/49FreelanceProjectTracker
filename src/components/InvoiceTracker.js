import React, { useState } from 'react';

const InvoiceTracker = ({ projects, addInvoice, invoices }) => {
  const [projectId, setProjectId] = useState('');
  const [amount, setAmount] = useState('');
  const [isPaid, setIsPaid] = useState(false);

  const handleInvoiceSubmit = () => {
    addInvoice(parseInt(projectId), amount, isPaid);
    setProjectId('');
    setAmount('');
    setIsPaid(false);
  };

  return (
    <div>
      <h2>Invoice Tracker</h2>
      <select value={projectId} onChange={(e) => setProjectId(e.target.value)}>
        <option value="">Select Project</option>
        {projects.map((project) => (
          <option key={project.id} value={project.id}>{project.name}</option>
        ))}
      </select>
      <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Amount" />
      <label>
        Paid:
        <input type="checkbox" checked={isPaid} onChange={(e) => setIsPaid(e.target.checked)} />
      </label>
      <button onClick={handleInvoiceSubmit}>Add Invoice</button>
      <h3>Invoices</h3>
      <ul>
        {invoices.map((invoice) => (
          <li key={invoice.id}>
            Project ID {invoice.projectId}: ${invoice.amount} - {invoice.isPaid ? 'Paid' : 'Pending'}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default InvoiceTracker;
