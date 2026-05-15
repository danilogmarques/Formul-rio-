export function FormularioDireito() {
    return (
        <form action="#" >
            <div className="flex flex-col lg-w-2/5 border-2 p-24 m-8 border-red-600 border-dashed text-xs">

                <label>SENHA</label>
                <input
                    className="m-1 p-1 border-1 border-black-solid rounded-md"
                    pattern="[0-9]{3}\.[0-9]{3}\.[0-9]{3}-[0-9]{2}"
                    required type="password"
                >
                </input>

                <label>SEXO</label>
                <select required className=" m-1 p-1 border-1 border-black-solid rounded-md">
                    <option>Masculino</option>
                    <option>Feminino</option>
                </select>

                <label>ESTADO</label><br />
                <select required className=" m-1 p-1 border-1 border-black-solid rounded-md">
                    <option>SAO PAULO</option>
                </select>

                <label>CIDADE</label>
                <select required className=" m-1 p-1 border-1 border-black-solid rounded-md">
                    <option>Pirassununga</option>
                    <option>Tambau</option>
                    <option>Santa Cruz das Palmeiras</option>
                </select>
            </div>
        </form>
    )
}



