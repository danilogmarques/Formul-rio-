
import { Input } from "../input/input"

// import { ChangeEvent, useState } from "react"

// export function Formulario() {

// const [ estado, setEstado ] = useState({
//     name:""  
// })

// const atualizaForm = ( event: ChangeEvent<HTMLInputElement> ) => {
//     setEstado (previous => {
//     return {...previous, [event.target.name] : event.target.value}
//    }) 
// };

// console.log("estadoFormulario: ", estado);

//     return (
//         <div className="lg-w-2/5 border-2 p-24 m-8 border-red-600 border-dashed text-xs" >
//             <form action="#">
//                 <label id="name">
//                     name
//                     <input
//                         onChange={atualizaForm}
//                         className=" m-1 p-1 border-1 border-black-solid rounded-md"
//                         type="text"
//                         id="name"
//                         name="name"
//                         placeholder="name completo"
//                         required
//                     />
//                 </label>
//                 <label id="identidade">DOCUMENTO DE IDENTIDADE</label>
//                 <input
//                     onChange={atualizaForm}
//                     className="m-1 p-1 border-1 border-black border-solid rounded-md"
//                     type="number"
//                     id="identidade"
//                     name="identidade"
//                     placeholder="identidade"
//                     required
//                 >
//                 </input>
//                 <label id="tributaria"> Email</label>
//                 <input
//                     onChange={atualizaForm}
//                     className="m-1 p-1 border-1 border-black-solid rounded-md"
//                     type="email"
//                     id="tributaria"
//                     name="tributaria"
//                     placeholder="email"
//                     pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
//                     required
//                 />
//                 <label id="cpf">NUMERO DO CPF</label>
//                 <input
//                     onChange={atualizaForm}
//                     className="m-1 p-1 border-1 border-black border-solid rounded-md"
//                     type="number"
//                     id="cpf"
//                     name="cpf"
//                     placeholder="CPF"
//                     required
//                     pattern="[0-9]{3}\.[0-9]{3}\.[0-9]{3}-[0-9]{2}"
//                 />
//             </form>
//         </div>
//     )
// }

export function Formulario() {
    return (
        <div>
            < Input />
            < Input />
            < Input />
            < Input />
            < Input />
        </div>
    )
}