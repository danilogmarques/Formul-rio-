export function Aside () {
    return (
        <div className="min-h-full w-1/5 border-1 bg-blue-500 border-solid border-black">
            <div>
            <h1>Logo</h1>
            </div>
            <div>
                <button>Registro PN</button><br></br>
                <button>Registro PJ</button>
            </div>
            <div>
                <input type="checkbox" name="Novo Cliente"></input>
                <input type="checkbox" name="Já Possuo conta"></input>
            </div>
        </div>
    )
}
