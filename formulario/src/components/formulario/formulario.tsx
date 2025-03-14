"use client"
import { useState } from "react"

export function Formulario() {

    const [valorInput, setValorInput] = useState("")

    const mudarNome = (e) => {
        setValorInput(e.target.value);
    };

    return (
        <div className=" w-2/5 border-2 p-24 m-8 border-red-600 border-dashed text-xs" >
            <form action="#">
                <label className="m-2" id="nome">
                    NOME DO CLIENTE
                    <input
                        className=" m-1 p-1 border-1 border-black-solid rounded-md"
                        type="text"
                        id="nome"
                    >
                    </input>
                </label>
                <label id="identidade">DOCUMENTO DE IDENTIDADE</label>
                <input
                    className="m-1 p-1 border-1 border-black border-solid rounded-md"
                    type="number"
                    id="identidade"
                    placeholder="identidade"
                >
                </input>
                <label id="tributaria">NUMERO DA IDENTIFICAÇÃO TRIBUTÁRIA</label>
                <input
                    className="m-1 p-1 border-1 border-black-solid rounded-md"
                    type="number"
                    id="tributaria"
                    placeholder="identificação tributária"
                >
                </input>
                <label id="cpf">NUMERO DO CPF</label>
                <input
                    className="m-1 p-1 border-1 border-black border-solid rounded-md"
                    type="number"
                    id="cpf"
                    placeholder="CPF"
                >
                </input>
            </form>
        </div>
    )
}

