import React, { useState } from 'react';
import './style.css';

const History = ({ listOfTasks }) => {
  return (
    <div className="inner-container">
      <div>
        {listOfTasks.map((task, index) => {
          console.log(listOfTasks);
          return (
            <div className="individual-task" key={index}>
              {task.task} {task.amount}
              <button className="remove-button">
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
