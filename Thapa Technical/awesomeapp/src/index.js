import React from "react";
import ReactDOM from "react-dom"
import './index.css'

const name = "Mohit"
const img1 = " https://picsum.photos/200/300 ";
const img2 = " https://picsum.photos/300/300";
const img3 = " https://picsum.photos/400/300";
const links = "https://www.google.co.in/?client=safari&channel=mac_bm"


// .heading {
//   color: #fa9191;
//   text-align: center;
//   text-transform: capitalize;
//   font-weight: bold;
//   margin: 50px 0px;
//   font-family: 'Varela Round', sans-serif;
// }

const heading = {
  color: "#fa1313",
  textTransform: "capitalize",
  fontWeight: " bold ",
  textAlign: "center",
  margin: "50px 0px",
  textShadow: "0pc 2px 4px #ffe9c5",
  fontFamily: "'Varela Round', sans-serif",
   } 

ReactDOM.render(
  <>
    <h1 style={ heading }> Hello , My name is {name}</h1>
    <div className="img_div">
    <img src = {img1} alt="random images" />
    <img src = {img2} alt="random images" />
    <a href = {links} target="_blank">
    <img src = {img3} alt="random images" />
    </a>
    </div>
  </>,
  document.getElementById('root')  
);
