import React from 'react'

export default function Boton(props) {

    return (
        <button onClick={()=>props.hacerClick(props.children)}>{props.children}</button>
    )
}

