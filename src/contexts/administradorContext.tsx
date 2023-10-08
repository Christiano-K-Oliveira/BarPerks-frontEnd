import { Dispatch, SetStateAction, createContext, useState } from "react";
import { toast } from "react-toastify";
import api from "../services/api";

interface iAdminProviderProps {
    children: React.ReactNode;   
}

interface iRegisterData {
  social_number: string;
  telephone: string;
  postal_code: string;
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

interface iAdminContext {
  adminRegister: (userData: iRegisterData) => Promise<void>;
  uploadAdmin: (id: number, data: File) => Promise<void>;
  dropFile: File | null;
  setFile: Dispatch<SetStateAction<File | null>>;
}
  
export const AdminContext = createContext({} as iAdminContext);

const AdminProvider = ({ children }: iAdminProviderProps) => {
  const [dropFile, setFile] = useState<File | null>(null);

  const adminRegister = async (pubData: iRegisterData): Promise<void> => {
      try {
          const res = await api.post<iRegisterData>("pubs", pubData)

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
          console.log(error)
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
  const uploadAdmin = async (id: number, data: File): Promise<void> => {
      console.log(id,data)
  }
  
    return (
        <AdminContext.Provider
          value={{
            adminRegister,
            uploadAdmin,
            dropFile,
            setFile
          }}>
          {children}
        </AdminContext.Provider>
      );
}

export default AdminProvider