import React from "react";

const Buttons = () =>{
    return (
        <div className="container container-fluid text-center" id="botones">
        <button type="button" className="btn btn-dark"><i class="fa-solid fa-play"></i></button>
        <button type="button" className="btn btn-dark"><i class="fa-solid fa-pause"></i></button>
        <button type="button" className="btn btn-dark"><i class="fa-solid fa-clock-rotate-left"></i></button>
        </div>
    )
}
export default Buttons