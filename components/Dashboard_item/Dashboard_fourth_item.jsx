import React from "react";
import "./Dashboard_fourth_item.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDollarSign, faArrowLeft } from "@fortawesome/free-solid-svg-icons";

export default function Dashboard_fourth_item() {
  return (
    <div className="dashboard-header">
      <div className="dashboard-title-section">
        <FontAwesomeIcon icon={faDollarSign} className="dashboard-icon" />
        <div>
          <div className="dashboard-title">Payments Dashboard</div>
          <div className="dashboard-subtitle">
            Revenue, Earnings, Payment status and Invoice status
          </div>
        </div>
      </div>
      <button className="dashboard-back-button">
        <FontAwesomeIcon icon={faArrowLeft} className="dashboard-back-icon" />
        Go back
      </button>
    </div>
  );
}
