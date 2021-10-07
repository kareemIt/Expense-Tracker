import React, { useState } from 'react';
import History from './component/History.js';
import './style.css';

export default function App() {
  const [balance, setBalance] = useState(0);
  const [history, setHistory] = useState([]);
  const [task, setTask] = useState('');
  const [amount, setAmount] = useState('');
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);

  function handleUserTask(e) {
    setTask(e.target.value);
  }

  function handleUserAmount(e) {
    setAmount(e.target.value);
  }

  function onRemoveItem(index) {
    const { amount } = history[index];

    if (amount > 0) {
      setIncome(income - amount);
    } else {
      setExpense(expense - amount);
    }

    setBalance(balance - amount);

    setHistory(history.filter((history, i) => i != index));
  }

  function sumbitInfo() {
    if (task == '' || amount == '') return;

    const amountNum = Number(amount);
    setHistory(history.concat({ task, amount: amountNum }));

    if (amountNum > 0) {
      setIncome(income + amountNum);
    } else {
      setExpense(expense + amountNum);
    }

    setBalance(balance + amountNum);
    setAmount('');
    setTask('');
  }

  function handleSubmit(e) {
    e.preventDefault();
    sumbitInfo();
  }

  return (
    <div>
      <div className="container">
        <h1>Expense Tracker</h1>
        <div className="balance">
          <p>Your Balance</p>
          <p>${balance.toFixed(2)}</p>
        </div>
        <div className="income-expense">
          <div className="income">
            <p>Income</p>
            <p className="number-income">${income.toFixed(2)}</p>
          </div>
          <div className="expense">
            <p>Expense</p>
            <p className="number-expense">${expense.toFixed(2)}</p>
          </div>
        </div>
        <div className="history">
          <p className="history-header">History</p>
          <History transactions={history} onRemoveItem={onRemoveItem} />
        </div>
        <div className="new-transactions">
          <p>Add New Transaction</p>
          <p>Text</p>
          <form onSubmit={handleSubmit}>
            <input
              value={task}
              placeholder="Enter text"
              type="text"
              onChange={handleUserTask}
            />
          </form>
          <p>Amount</p>
          <form onSubmit={handleSubmit}>
            <input
              value={amount}
              placeholder="Enter amount"
              type="number"
              onChange={handleUserAmount}
            />
          </form>
          <button onClick={sumbitInfo}>Add transaction</button>
        </div>
      </div>
    </div>
  );
}
