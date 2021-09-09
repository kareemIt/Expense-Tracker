import React from 'react';
import './style.css';

export default function App() {
  return (
    <div>
      <h1>Expensive Tracker</h1>
      <div className="Container">
        <div className="Balance" />
        <p>Your Balance</p>
        <p>$$</p>
        <div className="Income/Expenses">
          <p>Income</p>
          <p>$$</p>
          <p>Expense</p>
          <p>$$</p>
        </div>
        <div className="History" />
        <div className="new-transactions">
          <p>Add New Transaction</p>
          <p>text</p>
          <input type="text" />
          <p>Amount</p>
          <input type="text" />
          <button>Add transaction</button>
        </div>
      </div>
    </div>
  );
}
