'use client'

import { ChangeEvent, useState } from "react"

export function Input(props: any) {

    const [estado, setEstado] = useState({
        name: ''
    })

    console.log("estado Formulario", estado);

    const atualizaForm = (event: ChangeEvent<HTMLInputElement>) => {
        setEstado(previous => {
            return { ...previous, [event.target.name]: event.target.value }
        })
    };


    return (
        <div>
            <form action="#">
                <label>{props.name}</label>
                <input
                    onChange={atualizaForm}
                    className="m-1 p-1 border-1 border-black border-solid rounded-md"
                    name={props.name}
                    placeholder={props.placeholder}
                    id={props.id}
                    type={props.type} 
                />
            </form>
        </div>
    )
};





