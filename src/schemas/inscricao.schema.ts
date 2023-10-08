import { z } from "zod"

const MAX_FILE_SIZE = 500000;
const ACCEPTED_IMAGE_TYPES = ["image/jpeg", "image/jpg", "image/png", "image/svg"];

const registerClientSchema = z.object({
    name: z.string().nonempty('Nome obrigatório').max(150, 'Máximo de 150 caracteres'),
    birthDate: z.string().nonempty("Data de nascimento obrigatória"),
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
    photo: z.any()
    .refine((files) => files?.[0]?.size <= MAX_FILE_SIZE, `O tamanho máximo da imagem é de 5 MB.`)
    .refine(
      (files) => ACCEPTED_IMAGE_TYPES.includes(files?.[0]?.type),
      "Apenas os formatos .jpg, .jpeg, .png e .svg são suportados."
    ).nullish(),
    oldAge: z.boolean({required_error: "Obrigatório a assinatura", invalid_type_error: "isActive must be a boolean"}),
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