"use client";

import { useEffect, useState } from "react";
import { Input } from "../input/input";
import { useForm } from "react-hook-form";
import { Localidade } from "../../types/formData"
import { formSchema, FormData } from "../../validators/schemas"
import { zodResolver } from "@hookform/resolvers/zod";


export function FormularioDireito() {

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormData>({
        resolver: zodResolver(formSchema),
    });
    const [estados, setEstados] = useState<Localidade[]>([]);
    const [cidades, setCidades] = useState<Localidade[]>([]);
    const [estadoSelecionado, setEstadoSelecionado] = useState<string>("");


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

    useEffect(() => {
        if (!estadoSelecionado) return setCidades([]);

        fetch(
            `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${estadoSelecionado}/municipios?orderBy=nome`
        )
            .then((res) => res.json())
            .then((data) => setCidades(data));
    }, [estadoSelecionado]);

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
                    {...register("password")}
                />

                <label>SEXO</label>

                <select
                    required
                    className="m-1 p-1 border-1 border-black rounded-md"
                    {...register("sexo")}
                >
                    <option>Masculino</option>
                    <option>Feminino</option>
                </select>

                <label>ESTADO</label>

                <select
                    className="m-1 p-1 border-1 border-black rounded-md"
                    value={estadoSelecionado}
                    {...register("estado")}
                    onChange={(e) => setEstadoSelecionado(e.target.value)}
                >
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
                    className="m-1 p-1 border-1 border-black rounded-md"
                    disabled={!cidades.length}
                    {...register("cidade")}
                >
                    <option value=""></option>

                    {cidades.map((cidade: any) => (
                        <option
                            key={cidade.id}
                            value={cidade.nome}
                        >
                            {cidade.nome}
                        </option>
                    ))}
                </select>

            </div>

        </form>
    );
}