import React, { useState } from 'react';
import './index.css'

function CashWithdrawal({ denominationsList }) {
  const [balance, setBalance] = useState(2000);

  // Function to handle a denomination button click
  const handleDenominationClick = (value) => {
    if (balance >= value) {
      const updatedBalance = balance - value;
      setBalance(updatedBalance);
    } else {
      alert("Insufficient balance!");
    }
  };

  return (
    <div className="app-container-2">
    <div className="cash-withdrawal-container">
      <h1 className="withdraw">Cash Withdrawal</h1>
      <p className="balance">Balance: {balance} Rupees</p>
      <ul className="denominations-list">
        {denominationsList.map((denomination) => (
          <li key={denomination.id} className="denomination-item">
            <button
              type="button"
              className="denomination-button"
              onClick={() => handleDenominationClick(denomination.value)}
            >
              {denomination.value} Rupees
            </button>
          </li>
        ))}
      </ul>
    </div>
    </div>
  );





}

export default CashWithdrawal;
