import React, { useState } from 'react';
import './style.css';

const History = ({ listOfTasks, onRemoveItem }) => {
  return (
    <div className="inner-container">
      <div>
        {listOfTasks.map((task, index) => {
          console.log(listOfTasks);
          return (
            <div className="individual-task" key={index}>
              {task.task} {task.amount}
              <button
                className="remove-button"
                onClick={() => onRemoveItem(index)}
              >
                <span>+</span>
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default History;
