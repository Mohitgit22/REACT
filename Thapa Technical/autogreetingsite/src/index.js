import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';


let curDate = new Date(2023,12,23,21);
curDate = curDate.getHours();
let greeting = ' ';

const cssStyle = { };

if(curDate >= 1 && curDate < 12 ) {
  greeting = 'Good Morning';
  cssStyle.color = "green";
}else if ( curDate >= 12 && curDate < 19 ) {
  greeting = 'Good AfterNoon';
  cssStyle.color = " blue ";
}else{
  greeting = 'Good Night';
  cssStyle.color = " red ";
}

const heading = {
  fontFamily: "'Varela Round', sans-serif",
  textAlign: 'center'
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <h1 style= {heading} >  Hello Sir,  <span style={cssStyle}> { greeting } </span> </h1>
  </>

);

