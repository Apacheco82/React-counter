import React from "react";

//include images into your bundle


//create your first component
const Home = (props) => {
	return (
		<div className="container container-fluid d-flex text-center">
		<div className="counter">
		<div className="reloj"><i class="fa-regular fa-clock"></i></div>
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

export default Home;
