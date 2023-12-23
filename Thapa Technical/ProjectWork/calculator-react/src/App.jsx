import React from "react";
import {add,sub,div,mult} from './Calc';

function App () {
     
     const a=11;
     const b=15;
    return (
        <>
     <ul>
        <li>Sum of two no is {add(a,b)}</li>
        <li>Sub of two no is {sub(a,b)}</li>
        <li>Div of two no is {div(a,b)}</li>
        <li>Mult of two no is {mult(a,b)}</li>
     </ul>
     </>
    );
}

export default App;