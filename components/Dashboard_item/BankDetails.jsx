import React, { useState } from "react";
import "./BankDetails.css";

export default function BankDetails() {
  const [step, setStep] = useState("empty"); // 'empty', 'form', 'saved'
  const [account, setAccount] = useState(null);
  const [showDetails, setShowDetails] = useState(false); // New toggle

  const handleSave = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const newAccount = {
      holder: form.get("holder"),
      bankName: form.get("bankName"),
      number: form.get("number"),
      type: form.get("type"),
      ifsc: form.get("ifsc"),
    };
    setAccount(newAccount);
    setStep("saved");
  };

  return (
    <div className="bank-account-container">
      {step === "empty" && (
        <>
          <div className="header-box">
            <div>
              <strong>Bank Account</strong>
              <div className="desc">
                Add your bank account details to receive payments
              </div>
            </div>
            <button onClick={() => setStep("form")} className="add-link">
              Add Bank Account
            </button>
          </div>

          <div className="empty-state">
            <div className="bank-icon">🏦</div>
            <h3>Oops! We can’t send your earnings without your bank account</h3>
            <p>Add it now and start getting paid hassle-free.</p>
            <button onClick={() => setStep("form")} className="primary-btn">
              Add Bank Account
            </button>
          </div>
        </>
      )}

      {step === "form" && (
        <form className="form-card" onSubmit={handleSave}>
          <h3>Bank Account Details</h3>
          <p>Fill the following details</p>

          <input
            name="holder"
            placeholder="Account Holder's Full Name"
            required
          />
          <div className="row">
            <input name="bankName" placeholder="Bank Name" required />
            <input name="number" placeholder="Account Number" required />
            <input
              name="reNumber"
              placeholder="Re-enter Account Number"
              required
            />
          </div>
          <div className="row">
            <input name="type" placeholder="Account Type" required />
            <input name="ifsc" placeholder="IFSC Code" required />
          </div>
          <button type="submit" className="primary-btn">
            Save
          </button>
        </form>
      )}

      {step === "saved" && account && (
        <>
          <div className="header-box">
            <div>
              <strong>
                {account.bankName} - {account.type} account
              </strong>
              <div className="desc">{account.number}</div>
            </div>
            <button
              onClick={() => setShowDetails(!showDetails)}
              className="add-link"
            >
              {showDetails ? "Hide Account details" : "View Account details"}
            </button>
          </div>

          {showDetails && (
            <div className="form-card" style={{ marginTop: "1rem" }}>
              <h4>Bank Account Details</h4>
              <input value={account.holder} readOnly />
              <div className="row">
                <input value={account.bankName} readOnly />
                <input value={account.number} readOnly />
                <input placeholder="Add card details" readOnly />
              </div>
              <div className="row">
                <input value={account.type} readOnly />
                <input value={`IFSC Code : ${account.ifsc}`} readOnly />
              </div>
            </div>
          )}

          <div className="add-another">
            <button onClick={() => setStep("form")} className="add-link">
              Add another account
            </button>
          </div>
        </>
      )}
    </div>
  );
}
