"use client"

import { useState } from "react"

export function Aside () {

    const [ registroPN, setRegistroPN ] = useState ("");
    const [ registroPJ, setRegistroPJ ] = useState ("");

    return (
        <div className="flex flex-col flex-wrap items-center lg:min-h-full lg:w-1/5 border-1 border-solid border-black bg-yellow-100">
            <div className="m-6"> 
            <h1>Logo</h1>
            </div>
            <div className="border-2 border-red-600 border-dashed">
                <button type="button" className=" m-2 w-36 h-16 border-2 border-solid-black">Registro PN</button><br></br>
                <button type="button" className=" m-2 w-36 h-16 border-2 border-solid-black">Registro PJ</button>
            </div>
            <div className="m-4 p-2 w-42 h-16 border-2 border-blue-500 border-dashed">
                <label>Novo Cliente</label>
                <input type="checkbox" name="Novo Cliente"></input><br />
                <label>Já Possuo Conta</label>
                <input type="checkbox" name="Já Possuo conta"></input>
            </div>
        </div>
    )
}
