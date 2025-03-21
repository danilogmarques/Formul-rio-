
import { Input } from "../input/input"


export function Formulario() {
    return (
        <div className="lg-w-2/5 border-2 p-24 m-8 border-red-600 border-dashed text-xs" >
            <Input

                className="m-1 p-1 border-1 border-black border-solid rounded-md"
                type="text"
                id="name"
                name="name"
                placeholder="digite seu nome"
                required
            />
            <Input
                className="m-1 p-1 border-1 border-black-solid rounded-md"
                type="email"
                id="tributaria"
                name="tributaria"
                placeholder="email"
                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                required
            />
            <Input
                className="m-1 p-1 border-1 border-black border-solid rounded-md"
                type="number"
                id="cpf"
                name="cpf"
                placeholder="CPF"
                required
                pattern="[0-9]{3}\.[0-9]{3}\.[0-9]{3}-[0-9]{2}"
            />
            <Input
                type="number"
                id="identidade"
                name="identidade"
                placeholder="identidade"
                required
            />
        </div>
    )
}











