
import { Formulario } from "@/components/formulario/formulario";
import "./globals.css";
import { Aside } from "@/components/aside/aside";
import { FormularioDireito } from "@/components/formularioDireito/formularioDireito";



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        < FormularioDireito />
        < Formulario />
        < Aside />
        {children}
      </body>
    </html>
  );
}
