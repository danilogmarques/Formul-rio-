"use client"

import { useForm } from "react-hook-form"
import { Input } from "../input/input"


type FormData = {
    Name: string
    Email: string
    CPF: string
    Identidade: string
}


export function Formulario() {
    const { register, handleSubmit } = useForm<FormData>();

   

    function onSubmit( data: FormData ){
        console.log("submt", data)
    }
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
        <div className="lg-w-2/5 border-2 p-24 m-8 border-red-600 border-dashed text-xs">
            <Input
                className="m-1 p-1 border-1 border-black border-solid rounded-md"
                type="text"
                id="name"
                placeholder="digite seu nome"
                required
                {...register("Name")}
            />
            <Input
                className="m-1 p-1 border-1 border-black border-solid rounded-md"
                type="email"
                id="email"
                placeholder="email"
                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                required
                {...register("Email")}
            />
            <Input
                className="m-1 p-1 border-1 border-black-solid rounded-md"
                type="number"
                id="cpf"
                placeholder="CPF"
                required
                pattern="[0-9]{3}\.[0-9]{3}\.[0-9]{3}-[0-9]{2}"
                {...register("CPF")}
            />
            <Input
                className="m-1 p-1 border-1 border-black border-solid rounded-md"
                type="number"
                id="identidade"
                placeholder="identidade"
                required
                {...register("Identidade")}
            />
        </div>
        </form>
    )
}











