import { z } from "zod"

const registerClientSchema = z.object({
    name: z.string().nonempty('Nome obrigatório').max(150, 'Máximo de 150 caracteres'),
    birthDate: z.string().nonempty("Data de nascimento obrigatória")
    .regex(/^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[13-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/, "Formato dd/mm/yyyy"),
    socialNumber: z.string().nonempty('O CPF é obrigatório').min(11, 'Mínimo de 11 dígitos').max(11, 'Máximo de 11 dígitos'),
    email: z.string().nonempty('E-mail obrigatório').email('Forneça um e-mail válido').max(80, 'Máximo de 80 dígitos'),
    password: z.string()
    .min(8, "A senha precisa conter pelo menos 8 caracteres")
    .nonempty("A senha é obrigatória")
    .regex(/(?=.*?[#?!@$%^&*-])/, "É necessário pelo menos um caracter especial")
    .regex(/(?=.*?[A-Z])/, "É necessário pelo menos uma letra maiúscula")
    .regex(/(?=.*?[a-z])/, "É necessário pelo menos uma letra minúscula"),
    passwordRepeated: z.string().nonempty("A confirmação da senha é obrigatória"),
    phone: z.string().nonempty('Telefone obrigatório').min(11, 'DDD + Seu número').max(11, 'Máximo de 11 dígitos'),
}).refine(({ password, passwordRepeated}) => password === passwordRepeated, {
    message: "A senha não corresponde",
    path: ["passwordRepeated"]
})

const registerEstablishmentSchema = z.object({
    name: z.string().nonempty('Nome obrigatório').max(150, 'Máximo de 150 caracteres'),
    socialNumber: z.string().nonempty('O CPF/CNPJ é obrigatório').min(11, 'Mínimo de 11 dígitos').max(14, 'Máximo de 14 dígitos'),
    email: z.string().nonempty('E-mail obrigatório').email('Forneça um e-mail válido').max(80, 'Máximo de 80 dígitos'),
    password: z.string()
    .min(8, "A senha precisa conter pelo menos 8 caracteres")
    .nonempty("A senha é obrigatória")
    .regex(/(?=.*?[#?!@$%^&*-])/, "É necessário pelo menos um caracter especial")
    .regex(/(?=.*?[A-Z])/, "É necessário pelo menos uma letra maiúscula")
    .regex(/(?=.*?[a-z])/, "É necessário pelo menos uma letra minúscula"),
    passwordRepeated: z.string().nonempty("A confirmação da senha é obrigatória"),
    phone: z.string().nonempty('Telefone obrigatório').min(11, 'DDD + Seu número').max(11, 'Máximo de 11 dígitos'),
    address: z.string().nonempty('Endereço obrigatório').min(5, 'exemplo: Rua José Araujo, 120'),
    state: z.string().nonempty("O estado é obrigatório"),
    city: z.string().nonempty("A cidade é obrigatória"),
    postalCode: z.string().nonempty("CEP obrigatório").min(8, "Mínimo de 8 digítos").max(8, "Máximo de 8 dígitos")
}).refine(({ password, passwordRepeated}) => password === passwordRepeated, {
    message: "A senha não corresponde",
    path: ["passwordRepeated"]
})

export { registerClientSchema, registerEstablishmentSchema }