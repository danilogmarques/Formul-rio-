"use client"

import { useState } from "react"
import { Button } from "../button";

export function Aside() {

    const [tipoRegistro, setTipoRegistro] = useState("");

    return (
        <div className="flex flex-col items-center justify-evenly lg:min-h-full lg:w-1/5 border border-black bg-yellow-100">

            <div className="m-6">
                <h1>Logo</h1>
            </div>

            <div className="flex flex-col items-center border border-dashed border-red-600">

                <Button
                    type="submit"
                    form="formulario"
                    onClick={() => setTipoRegistro("PN")}
                    className="cursor-pointer bg-red-500 hover:bg-red-700 m-2 w-36 h-16 border-2 border-solid border-black text-white"
                >
                    Registro PN
                </Button>

                <Button
                    type="button"
                    onClick={() => setTipoRegistro("PJ")}
                    className="cursor-pointer bg-red-500 hover:bg-red-700 m-2 w-36 h-16 border-2 border-solid border-black text-white"
                >
                    Registro PJ
                </Button>

            </div>

            <div className="m-4 p-2 w-42 h-16 border-2 border-dashed border-blue-500">

                <label>
                    Novo Cliente
                    <input type="checkbox" name="novoCliente" className="ml-2" />
                </label>

                <br />

                <label>
                    Já Possuo Conta
                    <input type="checkbox" name="possuoConta" className="ml-2" />
                </label>

            </div>

            <p className="mb-4">
                Tipo selecionado: {tipoRegistro}
            </p>

        </div>
    )
}