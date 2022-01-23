import React from 'react'

import './Button.css'



const Button = (props) => {
    return (
        <a href={props.href}>

        <button type={props.type} className={`button ${props.variety}`}>
            {props.children}
        </button>
        </a>
    )
}

export default Button
