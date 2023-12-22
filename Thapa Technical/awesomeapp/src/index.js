import React from "react";
import ReactDOM from "react-dom"

const currDate = new Date().toLocaleDateString();
const currtime = new Date().toLocaleTimeString();

ReactDOM.render(
  <>
    <h1> Hello , My name is Mohit Verma</h1>
    <p> Current date is = {currDate}</p>
    <p> Current time is = {currtime}</p>
  </>,
  document.getElementById('root')  
);
