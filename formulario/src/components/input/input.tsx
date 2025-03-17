'use client'

import { ChangeEvent, useState } from "react"

export function Input() {

    const [ estado, setEstado ] = useState({
        name:''
    })

    const atualizaForm = ( event: ChangeEvent<HTMLInputElement>) => {
        setEstado(previous => {
            return { ...previous, [event.target.name] : event.target.value}
        })
    };


    return (
        <div className="lg-w-2/5 border-2 p-24 m-8 border-red-600 border-dashed text-xs" >
            <form action="#">
                <label id="name"></label>
                name
                <input
                    onChange={atualizaForm}
                    className=" m-1 p-1 border-1 border-black-solid rounded-md"
                    type="text"
                    id="name"
                    name="name"
                    placeholder="name completo"
                    required
                ></input>
                </form>
        

        </div>
    )
};
