
import React from "react";
import ReactDOM from "react-dom";
import Card from "./Card";
import './index.css';
import Sdata from "./Sdata";

function ncard(val) {
  return ( 
    <Card 
    imgsrc={val.imgsrc}
    title={val.title}
    sname={val.sname}
    link={val.link}
  />
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
      <h1 className="Heading" > List of top 5 Netflix Series in 2023 </h1>
      {Sdata.map(ncard)};
  </>
);


