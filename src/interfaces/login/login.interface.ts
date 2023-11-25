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

export interface iGoogleResponse {
    Ca: string;
    acessToken: string;
    googleId: string;
    profileObj: {
        email: string;
        familyName: string;
        givenName: string;
        googleid: string;
        imageUrl: string;
        name: string;
    };
    tokenId: string;
}