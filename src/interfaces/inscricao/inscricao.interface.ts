import { FieldErrors, UseFormHandleSubmit, UseFormRegister } from "react-hook-form";

export interface iSectionFormInscricao {
    title: string;
    name: string;
    socialNumber: string;
    email: string;
    password: string;
    passwordRepeated: string;
    phone: string;
    address: string;
    state: string;
    city: string;
    postalCode: string;
    photo: string;
    register: UseFormRegister<iFormInscricao>;
    handleSubmit: UseFormHandleSubmit<iFormInscricao>;
    errors: FieldErrors<iFormInscricao>;
}

export interface iFormInscricao {
    name: string;
    socialNumber: string;
    email: string;
    password: string;
    passwordRepeated: string;
    phone: string;
    address: string;
    state: string;
    city: string;
    postalCode: string;
    photo: string;
}

export interface iInput {
    id: string;
    type: string;
    placeholder: string;
    register: UseFormRegister<iFormInscricao>;
    name: "name" | "socialNumber" | "email" | "password" | "address" | "state" | "city" | "postalCode" | "passwordRepeated" | "phone" | "photo";
}