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
                <label id="nome">
                    NOME
                    <input
                        className=" m-1 p-1 border-1 border-black-solid rounded-md"
                        type="text"
                        id="nome"
                        placeholder="nome completo"
                        required
                    >
                    </input>
                </label>
                <label id="identidade">DOCUMENTO DE IDENTIDADE</label>
                <input
                    className="m-1 p-1 border-1 border-black border-solid rounded-md"
                    type="number"
                    id="identidade"
                    placeholder="identidade"
                    required
                >
                </input>
                <label id="tributaria"> Email</label>
                <input
                    className="m-1 p-1 border-1 border-black-solid rounded-md"
                    type="email"
                    id="tributaria"
                    placeholder="email"
                    pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                    required
                >
                </input>
                <label id="cpf">NUMERO DO CPF</label>
                <input
                    className="m-1 p-1 border-1 border-black border-solid rounded-md"
                    type="number"
                    id="cpf"
                    placeholder="CPF"
                    required
                    pattern="[0-9]{3}\.[0-9]{3}\.[0-9]{3}-[0-9]{2}"
                >
                </input>
            </form>
        </div>
    )
}

