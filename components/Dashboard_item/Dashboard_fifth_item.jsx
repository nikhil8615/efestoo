import React, { useState } from "react";
import PaymentTabs from "./PaymentTabs";
import "./Dashboard_fifth_item.css";
import BankDetails from "./BankDetails";
import Terms_conditions from "./Terms_and_condition";
import Terms_condition from "./Terms_and_condition";

export default function Dashboard_fifth_item() {
  const [activeTab, setActiveTab] = useState("payment");

  return (
    <div className="dashboard-wrapper">
      <div className="tab-buttons">
        <button
          className={activeTab === "payment" ? "active" : ""}
          onClick={() => setActiveTab("payment")}
        >
          Payment Statements
        </button>
        <button
          className={activeTab === "bank" ? "active" : ""}
          onClick={() => setActiveTab("bank")}
        >
          Bank Account Details
        </button>
        <button
          className={activeTab === "terms" ? "active" : ""}
          onClick={() => setActiveTab("terms")}
        >
          Terms & Conditions
        </button>
      </div>

      <div className="tab-content">
        {activeTab === "payment" && <PaymentTabs />}
        {activeTab === "bank" && <BankDetails />}
        {activeTab === "terms" && <Terms_condition />}
      </div>
    </div>
  );
}
