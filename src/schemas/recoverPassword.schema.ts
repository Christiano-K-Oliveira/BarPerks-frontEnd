import { z } from "zod";

const sendEmailSchema = z.object({
    email: z.string().nonempty('Email obrigatório').email('Forneça um email válido').max(80)
})

const newPasswordSchema = z.object({
    password: z.string()
    .min(8, "A senha precisa conter pelo menos 8 caracteres")
    .nonempty("A senha é obrigatória")
    .regex(/(?=.*?[#?!@$%^&*-])/, "É necessário pelo menos um caracter especial")
    .regex(/(?=.*?[A-Z])/, "É necessário pelo menos uma letra maiúscula")
    .regex(/(?=.*?[a-z])/, "É necessário pelo menos uma letra minúscula"),
    passwordRepeated: z.string().nonempty("A confirmação da senha é obrigatória")
}).refine(({ password, passwordRepeated}) => password === passwordRepeated, {
    message: "A senha não corresponde",
    path: ["passwordRepeated"]
})

export {
    sendEmailSchema,
    newPasswordSchema
}