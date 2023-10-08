import { Dispatch, SetStateAction, createContext, useState } from "react";
import api from "../services/api";
import { toast } from "react-toastify";
import { iFormInscricaoUser } from "../interfaces/inscricao/inscricao.interface";

interface iClientProviderProps {
    children: React.ReactNode;   
}

interface iClientContext {
    clientRegister: (userData: iFormInscricaoUser) => Promise<void>;
    uploadClient: (id: number, data: File) => Promise<void>;
    dropFile: File | null;
    setFile: Dispatch<SetStateAction<File | null>>;
    // login: (loginData: TLoginData) => Promise<void>;
    // isSeller: boolean;
    // successfullyCreated: boolean;
    // setSuccessfullyCreated: Dispatch<SetStateAction<boolean>>;
    // sendEmail: (email: TSendEmail) => Promise<void>;
    // updatePassword: (newPassData: TNewPass) => Promise<void>;
    // userLogout: () => void;
    // user: IUser | null;
    // seller: TAllUserPoster | null;
    // getInitials: (name: string | undefined) => string;
    // excludeUser: (id: number | null) => void;
    // updateUser: (data: iUpdateUser, idUser: number | null) => void
}
  

export const ClientContext = createContext({} as iClientContext);

const ClientProvider = ({ children }: iClientProviderProps) => {
    const [dropFile, setFile] = useState<File | null>(null);

    const clientRegister = async (clientData: iFormInscricaoUser): Promise<void> => {
        try {
            const res = await api.post<iFormInscricaoUser>("/clients", clientData);
            toast.success('Cadastro feito com sucesso!', {
            position: "bottom-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            });
            
            console.log(res.data)
        } 
        catch (error) {
            toast.error('Ops, algo deu errado!', {
                position: "bottom-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });        
        }
    };
    const uploadClient = async (id: number, data: File): Promise<void> => {
        console.log(id,data)
    }

    return (
        <ClientContext.Provider
            value={{
                clientRegister,
                uploadClient,
                dropFile,
                setFile
            }}>
            {children}
        </ClientContext.Provider>
      );
}

export default ClientProvider