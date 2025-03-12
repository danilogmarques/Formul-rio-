export function Formulario() {
    return (
        <div className="min-h-full w-2/5 border-1 border-black-solid bg-amber-200" >
            <form action="#">
                <label id="nome">NOME DO CLIENTE</label>
                <input className="border"type="text" name="nome" id="nome"></input>
                <label id="identidade">DOCUMENTO DE IDENTIDADE</label>
                <input className="border" type="number" name="identidade" id="identidade" placeholder="identidade"></input>
                <label id="tributaria">NUMERO DA IDENTIFICAÇÃO TRIBUTÁRIA</label>
                <input className="border"type="number" name="tributaria" id="tributaria" placeholder="identificação tributária"></input>
                <label id="cpf">NUMERO DO CPF</label>
                <input className="border"type="number" name="cpf" id="cpf" placeholder="CPF"></input>
            </form>
        </div>
    )
}
