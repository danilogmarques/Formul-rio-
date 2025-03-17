export function FormularioDireito() {
    return (
        <div className="w-2/5 p-24 m-8 border-2 border-red-600 border-dashed text-xs">
            <form action="#" >

                <label>SENHA</label>
                <input
                    className="m-1 p-1 border-1 border-black-solid rounded-md"
                    pattern="[0-9]{3}\.[0-9]{3}\.[0-9]{3}-[0-9]{2}"
                    required type="password"
                >
                </input>

                <label>SEXO</label><br />
                <select required className=" m-1 p-1 border-1 border-black-solid rounded-md">
                    <option>Masculino</option>
                    <option>Feminino</option>
                </select><br />

                <label>ESTADO</label><br />
                <select required className=" m-1 p-1 border-1 border-black-solid rounded-md">
                    <option>SAO PAULO</option>
                </select><br />

                <label>CIDADE</label>
                <select required className=" m-1 p-1 border-1 border-black-solid rounded-md">
                    <option>Pirassununga</option>
                    <option>Tambau</option>
                    <option>Santa Cruz das Palmeiras</option>
                </select>
            </form>
        </div>
    )
}



