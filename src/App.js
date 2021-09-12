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
    setHistory(history.filter((_history, i) => i != index));

    if (_history > 0) {
      setIncome(income - history.index);
      setAmount(amount - history.index);
    } else {
      setExpense(expense - history.index);
      setAmount(amount - history.index);
    }
  }

  function sumbitInfo() {
    if (task == '' || amount == '') return;

    setHistory(history.concat({ task, amount }));
    const amountNum = Number(amount);

    if (amountNum > 0) {
      setIncome(income + amountNum);
    } else {
      setExpense(expense + amountNum);
    }

    setBalance(balance + amountNum);
    setAmount('');
    setTask('');
  }

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
            <p className="number-income">${income.toFixed(2)}</p>
          </div>
          <div className="expense">
            <p>Expense</p>
            <p className="number-expense">${expense.toFixed(2)}</p>
          </div>
        </div>
        <div className="history">
          <p className="history-border">History</p>
          <History listOfTasks={history} onRemoveItem={onRemoveItem} />
        </div>
        <div className="new-transactions">
          <p>Add New Transaction</p>
          <p>Text</p>
          <input
            value={task}
            placeHolder="Enter text"
            type="text"
            onChange={handleUserTask}
          />
          <p>Amount</p>
          <input
            value={amount}
            placeHolder="Enter amount"
            type="number"
            onChange={handleUserAmount}
          />
          <button onClick={sumbitInfo}>Add transaction</button>
        </div>
      </div>
    </div>
  );
}
