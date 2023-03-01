import React from "react";

//include images into your bundle


//create your first component
const Home = (props) => { /*en home vamos a crear una funcion que recoge props,
va a ser un prop para cada div, para poder pintar cada elemento que creemos en index.jsx
Le podemos añadir un or || para que cuando aún no tenga valor, por defecto sea 0 hasta que pinte algo*/
	return (
		<div className="container container-fluid d-flex text-center">
		<div className="counter">
		<div className="reloj"><i className="fa-regular fa-clock"></i></div>
		<div className="six">{props.six || 0}</div>
		<div className="five">{props.five || 0}</div>
		<div className="four">{props.four || 0}</div>
		<div className="three">{props.three || 0}</div>
		<div className="two">{props.two || 0}</div>
		<div className="one">{props.one || 0}</div>
 		 </div>
  </div>

  
	)
};

export default Home; //se exporta home
