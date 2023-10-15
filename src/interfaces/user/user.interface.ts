import { UseFormRegister } from "react-hook-form";

export interface iFormUserEdit {
    name?: string;
    birth_date?: string;
    cpf?: string;
    email?: string;
    password?: string;
    passwordRepeated?: string;
    phone?: string;
    telephone?: string;
}

export interface iFormAdminEdit {
    name?: string;
    social_number?: string;
    email?: string;
    password?: string;
    passwordRepeated?: string;
    phone?: string;
    telephone?: string;
}

export interface iInputUserEdit{
    id: string;
    type: string;
    placeholder?: string;
    register: UseFormRegister<iFormUserEdit>;
    name: "name" | "cpf" | "email" | "password" | "passwordRepeated" | "telephone" | "birth_date";
}

export interface iFormUserRegisterPoints {
    cpf: string;
    points: string;
}

export interface iInputUserRegisterPoints{
    id: string;
    type: string;
    placeholder: string;
    register: UseFormRegister<iFormUserRegisterPoints>;
    name: "cpf" | "points";
}

export interface iButton {
    text: string;
    type: "button" | "submit";
    margin?: string;
}

export interface iRegisterProduct {
    name: string;
    code: string;
    value: string;
}

export interface iUpdateProduct {
    name?: string;
    code?: string;
    value?: string;
}

export interface iInputRegisterProduct {
    name: "name" | "code" | "value";
    register: UseFormRegister<iRegisterProduct>;
    type: string;
    placeholder: string;
}

export interface iFormRegisterClient {
    name: string;
    cpf: string;
    email: string;
    telephone: string;
    points?: string;
}

export interface iUpdateRegisterClient {
    name?: string;
    cpf?: string;
    email?: string;
    telephone?: string;
}

export interface iInputFormRegisterClient{
    type: string;
    placeholder: string;
    register: UseFormRegister<iFormRegisterClient>;
    name: "name" | "cpf" | "email" | "telephone";
}

export interface iFormSearchClient {
    name: string;
    cpf: string;
}

export interface iSearchClient {
    id: number;
    name: string;
    cpf: string;
    email: string;
    telephone: string;
    client: {
        id: string;
        photo_url?: string;
    };
}

export interface iInputFormSearchClient{
    type: string;
    placeholder: string;
    register: UseFormRegister<iFormSearchClient>;
    name: "name" | "cpf";
}

export interface iCardUser {
    id: number;
    name: string;
    cpf: string;
    email: string;
    telephone: string;
    photo_url?: string;
    client_id: string;
}

export interface iFormSearchPub {
    name: string;
    socialNumber: string;
}

export interface iInputFormSearchPub {
    type: string;
    placeholder: string;
    register: UseFormRegister<iFormSearchPub>;
    name: "name" | "socialNumber";
}

export interface iClientInfo {
    id: number;
    name: string;
    birth_date: string;
    cpf: string;
    email: string;
    telephone: string;
    photo_url: string;
}

export interface iAdminInfo {
    id: number;
    name: string;
    social_number: string;
    email: string;
    telephone: string;
    photo_url: string;
}

export interface iProduct {
    id: number;
    name: string;
    value: string;
    code: string;
    photo_url?: string;
}

export interface iPub {
    id: string;
    name: string;
    cpf: string;
    email: string;
    telephone: string;
    points: string;
    pub: {
        id: number;
        name: string;
        photo_url: string;
    };
    client: {
        id: string;
        name: string;
    }
}

export interface iSearchPub {
    name: string;
    socialNumber: string;
}

export interface iSearchReward {
    code_rescue: string;
}