import React from 'react';


const Cardbutton = (props) =>{
 
    return(
        <div>
            <button onClick={props.btnClick} style={{backgroundColor : props.bgColor }}>{props.label}</button>
        </div>
    )
}

export default Cardbutton;