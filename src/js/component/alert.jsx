import React from "react";

const Alert = (props) => /*un componente Alert con props, 
van a ser: 
show para cambiar la clase del primer div,
color para cambiar el color de bootstrap de la alerta y 
texto para poder cambiarlo dependiendo
de la alerta*/

{return (
<div className={props.show}>
<div className={props.color} role="alert">
 {props.texto}
</div>
</div>)
}

export default Alert //se exporta