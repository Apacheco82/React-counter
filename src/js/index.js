//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";
import Alert from "./component/alert.jsx" //importo el componente para poderlo usar en index, como si fuera home pero sin pasar por home
import Buttons from "./component/buttons.jsx";


let count = 0 //contador iniciado en 0 
let alerta1 = false //necesario para que solo pase una vez por cada alerta
let alerta2 = false
let alerta3 = false
let alerta4 = false


setInterval(()=>{ //funcion para que se renderice dependiendo del intervalo que escojamos

    let countString = count.toString(); // se pasa a string para poder pintarlo en html
    let ud = countString[countString.length-1]; //ultima posicion
    let dc = countString[countString.length-2]; //penultima posicion
    let cn = countString[countString.length-3]; //etc
    let ml = countString[countString.length-4];
    let dm = countString[countString.length-5];
    let cm = countString[countString.length-6];
    
    count++; //se amenta el contador

    if( dc ==="1" & alerta1 == false){ //cuando pasen 10 segundos, si alerta es false (que lo es)
         //renderiza la alerta con sus props cambiadas, cambio la clase del contenedor con "show", el color de la alerta en la clase de bootstrap y el texto que se va a mostrar
        ReactDOM.render(<Alert show= {"container container-fluid d-flex text-center"} color={"alert alert-danger"} texto={"Hola Cristian! Voy a desaparecer dentro de 10 segundos..."} />, document.querySelector("#appAlert"))
        alerta1=true} //reinicializa la variable alerta para que no vuelva a ser false y no vuelva a pasar por aquí

    if(dc ==="2" & alerta2 == false){//cuando pasen 20 segundos, si alerta es false (que lo es)
        //renderiza la alerta con sus props cambiadas, cambio la clase del contenedor con "show" para que aplicando CSS desaparezca
        ReactDOM.render(<Alert show={"desaparecehijoeputa"}/>, document.querySelector("#appAlert"))
        alerta2 = true //reinicializa la variable alerta para que no vuelva a ser false y no vuelva a pasar por aquí
    }
    if(ud === "1" & dc ==="2" & alerta3 == false){ //cuando pasen 21 segundos, si alerta es false (que lo es)
        //renderiza la alerta con sus props cambiadas, cambio la clase del contenedor con "show", el color de la alerta en la clase de bootstrap y el texto que se va a mostrar
    ReactDOM.render(<Alert show= {"container container-fluid d-flex text-center"} color={"alert alert-success"} texto={"Lo ves? No te mentí. Bueno, desapareceré para siempre cuando llegue a 30 segundos."} />, document.querySelector("#appAlert"))
    alerta3 = true} //reinicializa la variable alerta para que no vuelva a ser false y no vuelva a pasar por aquí

    if( dc ==="3" & alerta4 == false){//cuando pasen 20 segundos, si alerta es false (que lo es)
        //renderiza la alerta con sus props cambiadas, cambio la clase del contenedor con "show" para que aplicando CSS desaparezca
        ReactDOM.render(<Alert show={"desaparecehijoeputa"}/>, document.querySelector("#appAlert"))
        alerta4 = true //reinicializa la variable alerta para que no vuelva a ser false y no vuelva a pasar por aquí
    }


  //hay que renderizar aquí para que pinte cada segundo, si se pone fuera no lo va a hacer
ReactDOM.render(<Home one={ud} two={dc} three={cn} four={ml} five={dm} six={cm}/>, document.querySelector("#app"));
},1000);

let countToZero = 59 ; //contador, esta vez desde 60
setInterval(()=>{ //funcion para que se renderice dependiendo del intervalo que escojamos
    let countString = countToZero.toString(); // se pasa a string para poder pintarlo en html
    let udz = countString[countString.length-1]; //ultima posicion
    let dcz = countString[countString.length-2]; //penultima posicion
    let cnz = countString[countString.length-3]; //etc
    let mlz = countString[countString.length-4];
    let dmz = countString[countString.length-5];
    let cmz = countString[countString.length-6];
    
    countToZero--; //disminuimos el contador

    if(countToZero == -1 ){ //cuando el contador sea -1(ahora si podemos usar numeros) no pongo cuando sea 0 porque no pasaría nunca al 0
        //renderiza la alerta con sus props cambiadas, cambio la clase del contenedor con "show", el color de la alerta en la clase de bootstrap y el texto que se va a mostrar
        ReactDOM.render(<Alert show= {"container container-fluid d-flex text-center"} color={"alert alert-success"} texto={"Se acabó el tiempo. Volveré a establecer la cuenta atrás en un minuto"} />, document.querySelector("#appAlert2"))
        countToZero = 59 //reinicializo la variable para que empiece desde 59 y no pase a numeros negativos
    } else if(countToZero == 56){ //cuando pasen 3 segundos, elimino la alerta
        //renderiza la alerta con sus props cambiadas, cambio la clase del contenedor con "show" para que aplicando CSS desaparezca
        ReactDOM.render(<Alert show={"desaparecehijoeputa"}/>, document.querySelector("#appAlert2"))
    }
  //hay que renderizar aquí para que pinte cada segundo, si se pone fuera no lo va a hacer
ReactDOM.render(<Home one={udz} two={dcz} three={cnz} four={mlz} five={dmz} six={cmz}/>, document.querySelector("#appb"));
},1000);

let countButton = 0 //contador iniciado en 0 
setInterval(()=>{ //funcion para que se renderice dependiendo del intervalo que escojamos

    let countString = countButton.toString(); // se pasa a string para poder pintarlo en html
    let udb = countString[countString.length-1]; //ultima posicion
    let dcb = countString[countString.length-2]; //penultima posicion
    let cnb = countString[countString.length-3]; //etc
    let mlb = countString[countString.length-4];
    let dmb = countString[countString.length-5];
    let cmb = countString[countString.length-6];
    
    countButton++; //se amenta el contador


  //hay que renderizar aquí para que pinte cada segundo, si se pone fuera no lo va a hacer
ReactDOM.render(<Home one={udb} two={dcb} three={cnb} four={mlb} five={dmb} six={cmb}/>, document.querySelector("#appc"))
//ReactDOM.render(<Buttons />, document.querySelector("#buttons"))

},1000);

ReactDOM.render(<Buttons />, document.querySelector("#buttons"))
//esta sería la manera normal de hacerlo, fuera de la función
//ReactDOM.render(<Home/>, document.querySelector("#app"));

