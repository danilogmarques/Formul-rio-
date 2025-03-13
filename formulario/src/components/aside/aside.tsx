export function Aside () {
    return (
        <div className="flex flex-col justify-evenly items-center min-h-full w-1/5 border-1 border-solid border-black bg-yellow-100">
            <div className=""> 
            <h1>Logo</h1>
            </div>
            <div>
                <button type="button" className="w-36 h-16 border-2 border-solid-black">Registro PN</button><br></br>
                <button type="button" className="w-36 h-16 border-2 border-solid-black">Registro PJ</button>
            </div>
            <div>
                <input type="checkbox" name="Novo Cliente"></input>
                <input type="checkbox" name="Já Possuo conta"></input>
            </div>
        </div>
    )
}
