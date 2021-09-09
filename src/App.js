import React, { useState } from 'react';
import './style.css';

export default function App() {
  const [balance, setBalance] = useState(0);
  const [history, setHistory] = useState([]);

  return (
    <div>
      <div className="container">
        <h1>Expensive Tracker</h1>
        <div className="balance">
          <p>Your Balance</p>
          <p>${balance.toFixed(2)}</p>
        </div>
        <div className="income-expense">
          <div className="income">
            <p>Income</p>
            <p className="number-income">$$</p>
          </div>
          <div className="expense">
            <p>Expense</p>
            <p className="number-expense">$$</p>
          </div>
        </div>
        <div className="history">
          <p>History</p>
        </div>
        <div className="new-transactions">
          <p>Add New Transaction</p>
          <p>Text</p>
          <input placeHolder="Enter text" type="text" />
          <p>Amount</p>
          <input placeHolder="Enter amount" type="text" />
          <button>Add transaction</button>
        </div>
      </div>
    </div>
  );
}
