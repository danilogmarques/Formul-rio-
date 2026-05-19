"use client"

import { useForm } from "react-hook-form"
import { Input } from "../input/input"
import { formSchema, FormData } from "../../validators/schemas"
import { zodResolver } from "@hookform/resolvers/zod";


export function Formulario() {
    const { 
        register, 
        handleSubmit,
        formState: { errors },
     } = useForm<FormData>({
        resolver: zodResolver(formSchema),
    });

   

    function onSubmit( data: FormData ){
        console.log("submt", data)
    }
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col lg-w-2/5 border-2 p-24 m-8 border-red-600 border-dashed text-xs">

        <label>NOME</label>
            <Input
                className="m-1 p-1 border-1 border-black rounded-md"
                type="text"
                id="name"
                placeholder="digite seu nome"
                required
                {...register("name")}
            />
            <label>EMAIL</label>
            <Input
                className="m-1 p-1 border-1 border-black rounded-md"
                type="email"
                id="email"
                placeholder="email"
                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                required
                {...register("email")}
            />
            <label>CPF</label>
            <Input
                className="m-1 p-1 border-1 border-black rounded-md"
                type="number"
                id="cpf"
                placeholder="CPF"
                required
                pattern="[0-9]{3}\.[0-9]{3}\.[0-9]{3}-[0-9]{2}"
                {...register("cpf")}
            />
            <label>DOCUMENTO DE IDENTIDADE</label>
            <Input
                className="m-1 p-1 border-1 border-black border-solid rounded-md"
                type="number"
                id="identidade"
                placeholder="identidade"
                required
                {...register("rg")}
            />
        </div>
        </form>
    )
}











