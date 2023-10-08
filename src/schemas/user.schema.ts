import { z } from "zod";

const MAX_FILE_SIZE = 500000;
const ACCEPTED_IMAGE_TYPES = ["image/jpeg", "image/jpg", "image/png", "image/svg"];

const userEditSchema = z.object({
    name: z.string().max(150, 'Máximo de 150 caracteres').nullish(),
    cpf: z.string().min(11, 'Mínimo de 11 dígitos').max(11, 'Máximo de 11 dígitos').nullish(),
    email: z.string().email('Forneça um e-mail válido').nullish(),
    password: z.string()
    .min(8, "A senha precisa conter pelo menos 8 caracteres")
    .regex(/(?=.*?[#?!@$%^&*-])/, "É necessário pelo menos um caracter especial")
    .regex(/(?=.*?[A-Z])/, "É necessário pelo menos uma letra maiúscula")
    .regex(/(?=.*?[a-z])/, "É necessário pelo menos uma letra minúscula")
    .nullish(),
    passwordRepeated: z.string().nullish(),
    phone: z.string().min(11, 'DDD + Seu número').max(11, 'Máximo de 11 dígitos').nullish(),
    photo: z.any()
    .refine((files) => files?.[0]?.size <= MAX_FILE_SIZE, `O tamanho máximo da imagem é de 5 MB.`)
    .refine(
      (files) => ACCEPTED_IMAGE_TYPES.includes(files?.[0]?.type),
      "Apenas os formatos .jpg, .jpeg, .png e .svg são suportados."
    ).nullish()
}).refine(({ password, passwordRepeated}) => password === passwordRepeated, {
    message: "A senha não corresponde",
    path: ["passwordRepeated"]
})

const userRegisterPointsSchema = z.object({
    cpf: z.string().nonempty('O CPF é obrigatório').min(11, 'Mínimo de 11 dígitos').max(11, 'Máximo de 11 dígitos'),
    points: z.string().nonempty('A pontuação é obrigatória')

})

const userRegisterProductSchema = z.object({
    name: z.string().nonempty('Nome obrigatório').max(150, 'Máximo de 150 caracteres'),
    code: z.string().nonempty('Código obrigatório'),
    points: z.string().nonempty('Valor da pontuação obrigatório')
})

const userRegisterClientSchema = z.object({
    name: z.string().max(150, 'Máximo de 150 caracteres').nonempty("Nome obrigatório"),
    cpf: z.string().min(11, 'Mínimo de 11 dígitos').max(11, 'Máximo de 11 dígitos'),
    email: z.string().email('Forneça um e-mail válido'),
    phone: z.string().min(11, 'DDD + Seu número').max(11, 'Máximo de 11 dígitos'),
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
    userSearchPubSchema
}