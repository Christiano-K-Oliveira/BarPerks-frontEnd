import { UseFormRegister } from "react-hook-form";

export interface iFormLogin {
    email: string;
    password: string;
}

export interface iTitleLogin{
    title: string;
}

export interface iInputLogin {
    id: string;
    type: string;
    placeholder: string;
    register: UseFormRegister<iFormLogin>;
    name: "email" | "password";
}