import { UseFormRegister } from "react-hook-form";

export interface iFormUserEdit {
    name: string;
    cpf: string;
    email: string;
    password: string;
    passwordRepeated: string;
    phone: string;
    photo: string;
}

export interface iInputUserEdit{
    id: string;
    type: string;
    placeholder?: string;
    register: UseFormRegister<iFormUserEdit>;
    name: "name" | "cpf" | "email" | "password" | "passwordRepeated" | "phone" | "photo";
}

export interface iFormUserRegisterPoints {
    name: string;
    cpf: string;
    product: string;
}

export interface iInputUserRegisterPoints{
    id: string;
    type: string;
    placeholder: string;
    register: UseFormRegister<iFormUserRegisterPoints>;
    name: "name" | "cpf" | "product";
}

export interface iButton {
    text: string;
    type: "button" | "submit";
    margin?: string;
}

export interface iRegisterProduct {
    name: string;
    code: string;
    points: string;
}

export interface iInputRegisterProduct {
    name: "name" | "code" | "points";
    register: UseFormRegister<iRegisterProduct>;
    type: string;
    placeholder: string;
}

export interface iFormRegisterClient {
    name: string;
    cpf: string;
    email: string;
    phone: string;
}

export interface iInputFormRegisterClient{
    type: string;
    placeholder: string;
    register: UseFormRegister<iFormRegisterClient>;
    name: "name" | "cpf" | "email" | "phone";
}

export interface iFormSearchClient {
    name: string;
    cpf: string;
}

export interface iInputFormSearchClient{
    type: string;
    placeholder: string;
    register: UseFormRegister<iFormSearchClient>;
    name: "name" | "cpf";
}

export interface iCardUser {
    name: string;
    cpf: string;
    photo_url?: string;
}

export interface iFormSearchPub {
    name: string;
    socialNumber: string;
}

export interface iInputFormSearchPub{
    type: string;
    placeholder: string;
    register: UseFormRegister<iFormSearchPub>;
    name: "name" | "socialNumber";
}