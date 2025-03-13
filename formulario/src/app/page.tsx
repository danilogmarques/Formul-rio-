import { Formulario } from "@/components/formulario/formulario";
import "./globals.css";
import { Aside } from "@/components/aside/aside";
import { FormularioDireito } from "@/components/formularioDireito/formularioDireito";


export default function Home () {
  return (
    <div className="flex w-screen h-screen bg-amber-700 justify-center items-center">
      <section className=" flex w-4/5 h-4/5 bg-gray-200" >
        <Aside />
        <Formulario />
        <FormularioDireito /> 
      </section>
    </div>
    )
  }

