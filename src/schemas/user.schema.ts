import { z } from "zod";

const userEditSchema = z.object({
    name: z.string().max(150, 'Máximo de 150 caracteres').nullish(),
    birth_date: z.union([z.string().min(10, 'Mínimo de 10 dígitos').max(10, 'Máximo de 10 dígitos').nullish(), z.string().max(0)]),
    cpf: z.union([z.string().min(11, 'Mínimo de 11 dígitos').max(11, 'Máximo de 11 dígitos').nullish(), z.string().max(0)]),
    email: z.union([z.string().email('Forneça um e-mail válido').nullish().default(null), z.string().max(0)]),
    password: z.union([z.string()
    .min(8, "A senha precisa conter pelo menos 8 caracteres")
    .regex(/(?=.*?[#?!@$%^&*-])/, "É necessário pelo menos um caracter especial")
    .regex(/(?=.*?[A-Z])/, "É necessário pelo menos uma letra maiúscula")
    .regex(/(?=.*?[a-z])/, "É necessário pelo menos uma letra minúscula")
    .nullish().default(null), z.string().max(0)]),
    passwordRepeated: z.union([z.string().nullish(), z.string().max(0)]),
    telephone: z.union([z.string().min(11, 'DDD + Seu número').max(11, 'Máximo de 11 dígitos').nullish(), z.string().max(0)]),
}).refine(({ password, passwordRepeated}) => password === passwordRepeated, {
    message: "A senha não corresponde",
    path: ["passwordRepeated"]
})

const userRegisterPointsSchema = z.object({
    cpf: z.string().nonempty('O CPF é obrigatório').min(11, 'Mínimo de 11 dígitos').max(11, 'Máximo de 11 dígitos'),
    points: z.string().nonempty('A pontuação é obrigatória')

})

const userRegisterProductSchema = z.object({
    name: z.string().nonempty('Nome obrigatório').max(150, 'Máximo de 150 caracteres').max(50, 'Máximo de 50 caracteres'),
    code: z.string().nonempty('Código obrigatório').max(10, 'Máximo de 10 caracteres'),
    value: z.string().nonempty('Valor da pontuação obrigatório').max(8, 'Máximo de 8 dígitos').refine((val: string) => isNaN(+val) === false, {
        message: "Aceito somente números",
    }),
})

const userRegisterUpdateProductSchema = z.object({
    name: z.union([z.string().nonempty('Nome obrigatório').max(150, 'Máximo de 150 caracteres').max(50, 'Máximo de 50 caracteres'), z.string().max(0).nullish()]),
    code: z.union([z.string().nonempty('Código obrigatório').max(10, 'Máximo de 10 caracteres'), z.string().max(0).nullish()]),
    value: z.union([z.string().nonempty('Valor da pontuação obrigatório').max(8, 'Máximo de 8 dígitos').refine((val: string) => isNaN(+val) === false, {
        message: "Aceito somente números",
    }), z.string().max(0).nullish()]),
})


const userRegisterClientSchema = z.object({
    name: z.string().max(150, 'Máximo de 150 caracteres').nonempty("Nome obrigatório"),
    cpf: z.string().min(11, 'Mínimo de 11 dígitos').max(11, 'Máximo de 11 dígitos'),
    email: z.string().email('Forneça um e-mail válido'),
    telephone: z.string().min(11, 'DDD + Seu número').max(11, 'Máximo de 11 dígitos'),
})

const userUpdateRegisterClientSchema = z.object({
    name: z.union([z.string().max(150, 'Máximo de 150 caracteres').nonempty("Nome obrigatório"), z.string().max(0)]),
    cpf: z.union([z.string().min(11, 'Mínimo de 11 dígitos').max(11, 'Máximo de 11 dígitos'), z.string().max(0)]),
    email: z.union([z.string().email('Forneça um e-mail válido'), z.string().max(0)]),
    telephone: z.union([z.string().min(11, 'DDD + Seu número').max(11, 'Máximo de 11 dígitos'), z.string().max(0)]),
})

const userSearchClientSchema = z.object({
    name: z.string().max(150, 'Máximo de 150 caracteres').nonempty("Nome obrigatório"),
    cpf: z.string().min(11, 'Mínimo de 11 dígitos').max(11, 'Máximo de 11 dígitos'),
})

const userSearchPubSchema = z.object({
    name: z.string().max(150, 'Máximo de 150 caracteres'),
    socailNumber: z.string().min(11, 'Mínimo de 11 dígitos').max(14, 'Máximo de 14 dígitos'),
})

export { 
    userEditSchema, 
    userRegisterPointsSchema, 
    userRegisterProductSchema,
    userRegisterClientSchema,
    userSearchClientSchema,
    userSearchPubSchema,
    userRegisterUpdateProductSchema,
    userUpdateRegisterClientSchema,
}