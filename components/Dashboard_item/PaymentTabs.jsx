import React, { useState } from "react";

const data = new Array(50).fill(0).map((_, i) => ({
  id: i + 1,
  event: `IIT Hyderabad`,
  code: `20DA1CT50${56123 + i}`,
  registered: 100 + (i % 50),
  total: `₹${5000 + (i % 20) * 100}`,
  fee: `₹${450 + (i % 5) * 10}`,
  payable: `₹${4550 + (i % 10) * 50}`,
  status: ["Pending", "Completed", "On hold"][i % 3],
  mode: i % 2 === 0 ? "Bank Transfer" : "UPI",
  invoice: ["Pending", "Paid", "Generated"][i % 3],
  pdf: `/invoices/invoice${(i % 5) + 1}.pdf`,
}));

export default function PaymentTable() {
  const [viewAll, setViewAll] = useState(false);
  const [page, setPage] = useState(1);

  const initialItemCount = 9;
  const itemsPerPage = 15;

  const startIndex = viewAll ? (page - 1) * itemsPerPage : 0;
  const endIndex = viewAll ? page * itemsPerPage : initialItemCount;

  const paginatedData = data.slice(startIndex, endIndex);
  const totalPages = Math.ceil((data.length - 15) / itemsPerPage) + 1;

  const handleViewInvoice = (url) => {
    window.open(url, "_blank");
  };

  const handleViewAll = () => {
    setViewAll(true);
    setPage(1);
  };

  return (
    <div className="table-container">
      <table>
        <thead>
          <tr>
            <th>Event Name & ID</th>
            <th>Registered</th>
            <th>Total amount</th>
            <th>Platform fee</th>
            <th>Payable amount</th>
            <th>Payment status</th>
            <th>Payment mode</th>
            <th>Invoice status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {paginatedData.map((item) => (
            <tr key={item.id}>
              <td>
                {item.event}
                <br />
                <span className="event-code">{item.code}</span>
              </td>
              <td>{item.registered}</td>
              <td>{item.total}</td>
              <td>{item.fee}</td>
              <td>{item.payable}</td>
              <td
                className={`status ${item.status
                  .toLowerCase()
                  .replace(" ", "-")}`}
              >
                {item.status}
              </td>
              <td>{item.mode}</td>
              <td className={`invoice ${item.invoice.toLowerCase()}`}>
                {item.invoice}
              </td>
              <td>
                <button
                  className="invoice-button"
                  onClick={() => handleViewInvoice(item.pdf)}
                >
                  View Invoice
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {!viewAll && (
        <div className="view-all" onClick={handleViewAll}>
          View all
        </div>
      )}

      {viewAll && (
        <div className="pagination">
          {[...Array(totalPages)].map((_, idx) => (
            <button
              key={idx}
              className={page === idx + 1 ? "active" : ""}
              onClick={() => setPage(idx + 1)}
            >
              {idx + 1}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
