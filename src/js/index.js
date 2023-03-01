//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";


let count = 0;
setInterval(()=>{
    let countString = count.toString();
    let ud = countString[countString.length-1];
    let dc = countString[countString.length-2];
    let cn = countString[countString.length-3];
    let ml = countString[countString.length-4];
    let dm = countString[countString.length-5];
    let cm = countString[countString.length-6];
    
    count++;

ReactDOM.render(<Home one={ud} two={dc} three={cn} four={ml} five={dm} six={cm}/>, document.querySelector("#app"));
},1000);

let countToZero = 1000;
setInterval(()=>{
    let countString = countToZero.toString();
    let udz = countString[countString.length-1];
    let dcz = countString[countString.length-2];
    let cnz = countString[countString.length-3];
    let mlz = countString[countString.length-4];
    let dmz = countString[countString.length-5];
    let cmz = countString[countString.length-6];
    
    countToZero--;

ReactDOM.render(<Home one={udz} two={dcz} three={cnz} four={mlz} five={dmz} six={cmz}/>, document.querySelector("#appb"));
},1000);


//render your react application
//ReactDOM.render(<Home/>, document.querySelector("#app"));

