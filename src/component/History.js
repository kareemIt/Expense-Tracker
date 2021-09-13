import React, { useState } from 'react';
import './style.css';

const History = ({ transactions, onRemoveItem }) => {
  return (
    <div className="inner-container">
      <div>
        {transactions.map((transaction, index) => (
          <div
            className={transaction.amount > 0 ? 'postive' : 'negative'}
            key={index}
          >
            {transaction.task} {transaction.amount}
            <button
              className="remove-button"
              onClick={() => onRemoveItem(index)}
            >
              <span>+</span>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default History;
