import React from 'react';

const ReportSummary = ({ projects, invoices }) => {
  const totalEarnings = invoices
    .filter((invoice) => invoice.isPaid)
    .reduce((sum, invoice) => sum + invoice.amount, 0)
    .toFixed(2);

  const totalHours = projects.reduce((sum, project) => sum + project.hours, 0);

  return (
    <div>
      <h2>Report Summary</h2>
      <p>Total Earnings: ${totalEarnings}</p>
      <p>Total Hours Worked: {totalHours} hours</p>
    </div>
  );
};

export default ReportSummary;
