"use client";

import { useEffect, useState } from "react";
import { FormData } from "../../types/formData";
import { Input } from "../input/input";
import { useForm } from "react-hook-form";

export function FormularioDireito() {

    const { register, handleSubmit } = useForm<FormData>();

    const [estados, setEstados] = useState<any[]>([]);

    useEffect(() => {

        async function buscarDados() {
            try {
                const res = await fetch(
                    "https://servicodados.ibge.gov.br/api/v1/localidades/estados"
                );

                const data = await res.json();

                setEstados(data);

                console.log(data);

            } catch (error) {
                console.log("Erro ao buscar estados:", error);
            }
        }

        buscarDados();

    }, []);

    function onSubmit(data: FormData) {
        console.log("submit", data);
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col lg-w-2/5 border-2 p-24 m-8 border-red-600 border-dashed text-xs">

            

                <label>SENHA</label>

                <Input
                    className="m-1 p-1 border-1 border-black rounded-md"
                    pattern="[0-9]{3}\.[0-9]{3}\.[0-9]{3}-[0-9]{2}"
                    required
                    type="password"
                    {...register("senha")}
                />

                <label>SEXO</label>

                <select
                    required
                    className="m-1 p-1 border-1 border-black rounded-md"
                >
                    <option>Masculino</option>
                    <option>Feminino</option>
                </select>

                <label>ESTADO</label>

                <select
                    required
                    className="m-1 p-1 border-1 border-black rounded-md"
                >
                    <option value=""></option>

                    {estados.map((estado: any) => (
                        <option
                            key={estado.id}
                            value={estado.sigla}
                        >
                            {estado.nome}
                        </option>
                    ))}
                </select>

                <label>CIDADE</label>

                <select
                    required
                    className="m-1 p-1 border-1 border-black rounded-md"
                >
                    <option>Pirassununga</option>
                    <option>Tambaú</option>
                    <option>Santa Cruz das Palmeiras</option>
                </select>

            </div>

        </form>
    );
}