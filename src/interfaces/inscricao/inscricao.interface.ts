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
    register: UseFormRegister<iFormInscricao>;
    handleSubmit: UseFormHandleSubmit<iFormInscricao>;
    errors: FieldErrors<iFormInscricao>;
}

export interface iSectionFormInscricaoUser {
    title: string;
    name: string;
    birthDate: string;
    socialNumber: string;
    email: string;
    password: string;
    passwordRepeated: string;
    phone: string;
    register: UseFormRegister<iFormInscricaoUser>;
    handleSubmit: UseFormHandleSubmit<iFormInscricaoUser>;
    errors: FieldErrors<iFormInscricaoUser>;
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
}

export interface iFormInscricaoUser {
    name: string;
    birthDate: string;
    socialNumber: string;
    email: string;
    password: string;
    passwordRepeated: string;
    phone: string;
}

export interface iInputAdmin {
    id: string;
    type: string;
    placeholder: string;
    register: UseFormRegister<iFormInscricao>;
    name: "name" | "socialNumber" | "email" | "password" | "address" | "state" | "city" | "postalCode" | "passwordRepeated" | "phone";
}

export interface iInputUser {
    id: string;
    type: string;
    placeholder: string;
    register: UseFormRegister<iFormInscricaoUser>;
    name: "name" | "birthDate" | "socialNumber" | "email" | "password" | "passwordRepeated" | "phone";
}
