"use client"
import { useState } from "react"

export function Formulario() {

    const [valorInput, setValorInput] = useState("")

    const mudarNome = (e) => {
        setValorInput(e.target.value);
    };

    return (
        <div className=" w-2/5 border-3 p-26 m-4 border-black border-dashed" >
            <form action="#">
                <label id="nome">
                    NOME DO CLIENTE
                    <input
                        className="border"
                        type="text"
                        id="nome">
                        value={valorInput}
                        onChange={mudarNome}
                    </input>
                </label>
                <label id="identidade">DOCUMENTO DE IDENTIDADE</label>
                <input className="border" type="number" name="identidade" id="identidade" placeholder="identidade"></input>
                <label id="tributaria">NUMERO DA IDENTIFICAÇÃO TRIBUTÁRIA</label>
                <input className="border" type="number" name="tributaria" id="tributaria" placeholder="identificação tributária"></input>
                <label id="cpf">NUMERO DO CPF</label>
                <input className="border" type="number" name="cpf" id="cpf" placeholder="CPF"></input>
            </form>
        </div>
    )
}
