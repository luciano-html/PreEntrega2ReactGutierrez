import React from "react";
import "./itemStyle.css"
import ButtonComponent from "../NavBar/ButtonComponent/ButtonComponent";
function Item(props){

    return(
        <div className="tarjeta">
            <h2>{props.title}</h2>
            <img src={props.img} alt="" />
            <span>{props.price}$</span>
            <ButtonComponent label="Ver Producto"/>
        </div>
        
    )
}
export default Item;