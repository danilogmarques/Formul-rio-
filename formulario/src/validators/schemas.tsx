import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

function validarCPF(cpf: string): boolean {
    const limpo = cpf.replace(/[^\d]+/g, "");
    if (limpo.length !== 11 || !!limpo.match(/^(\d)\1{10}$/)) return false;

    const cpfs = limpo.split("").map((el) => +el);
    const rest = (count: number) =>
        ((cpfs.slice(0, count - 12).reduce((s, el, i) => s + el * (count - i), 0) * 10) % 11) % 10;

    return rest(10) === cpfs[9] && rest(11) === cpfs[10];
}

const formSchema = z.object({
    name: z.string().min(3, "O nome deve ter pelo menos 3 caracteres."),
    email: z
        .string()
        .min(1, "O e-mail é obrigatório.")
        .email("Insira um formato de e-mail válido."),
    password: z
        .string()
        .min(6, "A senha deve ter pelo menos 6 caracteres."),
    cpf: z
        .string()
        .min(1, "O CPF é obrigatório.")
        .transform((val) => val.replace(/[^\d]/g, "")) // Remove pontos e traços antes de validar
        .refine((val) => val.length === 11, "O CPF deve ter exatamente 11 dígitos.")
        .refine((val) => validarCPF(val), "CPF inválido."),
    rg: z
        .string()
        .min(1, "O RG é obrigatório.")
        .regex(/^[0-9a-zA-Z.-]+$/, "Formato de RG inválido.")
        .transform((val) => val.replace(/[^\d]/g, "")),
    mensagem: z.string().min(10, "A mensagem deve ter pelo menos 10 caracteres."),
    cidade: z.string(),
    estado: z.string(),
    sexo: z.string()
});

   export type FormData = z.infer<typeof formSchema>;

export { formSchema };