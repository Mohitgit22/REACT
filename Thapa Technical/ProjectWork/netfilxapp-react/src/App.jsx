
import React from "react";
import Card from "./Card";
import Sdata from "./Sdata";

function ncard(val) {
  return ( 
    <Card 
    key= {val.id}
    imgsrc={val.imgsrc}
    title={val.title}
    sname={val.sname}
    link={val.link}
  />
  );
}

const App=()=> {
    return (
        <>
        <h1 className="Heading" > List of top 5 Netflix Series in 2023 </h1>
        {Sdata.map(ncard)};
        </>
    )
}
export default App;


