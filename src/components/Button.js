import React from "react";

import '../styles/Button.css'
const Button = ({children,event_click}) => {


    return (
        <button type="button" onClick={event_click} className="button">{children}</button>
    )
}


export default Button;