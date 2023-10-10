import { Dispatch, SetStateAction, createContext, useState } from "react";
import { toast } from "react-toastify";
import api from "../services/api";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import { iSendEmail } from "../interfaces/user/recoverPassword.interface";

interface iAdminProviderProps {
    children: React.ReactNode;   
}

interface iRegisterData {
  id?: number;
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

interface iLoginData {
  email: string;
  password: string;
}

interface iAdminContext {
  adminRegister: (pubData: iRegisterData) => Promise<void>;
  uploadAdmin: (id: number, data: File) => Promise<void>;
  dropFile: File | null;
  setFile: Dispatch<SetStateAction<File | null>>;
  adminLogin: (loginData: iLoginData) => Promise<void>;
  cookies: { token?: string };
  setCookie: (name: "token", value: string, options?: object | undefined) => void;
  adminLoginGoogle: (email: string) => Promise<void>;
  adminLoginFacebook: (email: string) => Promise<void>;
  adminAuthLogin: (token: string) => Promise<void>;
  sendEmailAdmin: (data: iSendEmail) => Promise<void>;
  resetPasswordAdmin: (token: string, data: { password: string; }) => Promise<void>;
}
  
export const AdminContext = createContext({} as iAdminContext);

const AdminProvider = ({ children }: iAdminProviderProps) => {
  const [dropFile, setFile] = useState<File | null>(null);
  const navigate = useNavigate()
  const [cookies, setCookie] = useCookies(['token']);

  const adminRegister = async (pubData: iRegisterData): Promise<void> => {
      try {
          const res = await api.post<iRegisterData>("pubs", pubData)

          if(res.data.id && dropFile){
            uploadAdmin(res.data.id, dropFile)
          }

          toast.success('Cadastro feito com sucesso!', {
          position: "bottom-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          });

          setTimeout(() => {
            navigate('/login-administrador')
          }, 3500)
      } 
      catch (error) {
          toast.error('Email já cadastrado!', {
              position: "bottom-right",
              autoClose: 3000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
          });        
      }
  };
  const uploadAdmin = async (id: number, data: File): Promise<void> => {
    const config = {headers: {"Content-Type": "multipart/form-data"}}
    const file = new FormData()

    if(data.name.includes("jpg") || data.name.includes("jpeg") || data.name.includes("png")){
      file.append("file", data)
      await api.patch(`pubs/upload/${id}`, file, config)
    }
  }

  const adminLogin = async (loginData: iLoginData): Promise<void> => {
    try {
        const res = await api.post('login-pub', loginData)
        setCookie('token', res.data.token)
        // const cookie = cookies['token']

        toast.success('Login feito com sucesso!', {
            position: "bottom-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });

        setTimeout(() => {
            navigate('/admin')
        }, 3500)                  
    }
    catch (erro){
      toast.error('Ops, algo deu errado!', {
          position: "bottom-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
      });   
    }
  }

  const adminLoginGoogle = async (email: string): Promise<void> => {
    try {
        const res = await api.post('login-google-pub', { email: email })
        setCookie('token', res.data.token)

        toast.success('Login feito com sucesso!', {
            position: "bottom-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });

        setTimeout(() => {
            navigate('/usuario')
        }, 3500)  
    }
    catch (err) {
        toast.error('Estabelecimento não cadastrado, faça o seu cadastro.', {
            position: "bottom-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
        
        setTimeout(() => {
            navigate('/inscricao-estabelecimento')
        }, 3500)  
    }
  }
  const adminLoginFacebook = async (email: string): Promise<void> => {
    try {
        const res = await api.post('login-facebook-pub', { email: email })
        setCookie('token', res.data.token)

        toast.success('Login feito com sucesso!', {
            position: "bottom-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });

        setTimeout(() => {
            navigate('/usuario')
        }, 3500)  
    }
    catch (err) {
        toast.error('Estabelecimento não cadastrado, faça o seu cadastro.', {
            position: "bottom-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
        
        setTimeout(() => {
            navigate('/inscricao-estabelecimento')
        }, 3500)  
    }
  }
  const adminAuthLogin = async (token: string): Promise<void> => {
    try {
        await api.get('pubs', {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        })
    }
    catch {
        navigate('/')
    }
  }

  const sendEmailAdmin = async (data: iSendEmail): Promise<void> => {
    try {
      await api.post('pubs/recuperar-senha', data)

      toast.success('Email enviado com sucesso!', {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
    catch {
      toast.error('Verifique se o seu email esta correto.', {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  }
  const resetPasswordAdmin = async (token: string, data: { password: string }): Promise<void> => {
    try {
      await api.patch(`pubs/recuperar-senha/${token}`, data)

      toast.success('Senha atualizada com sucesso!', {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });

      setTimeout(() => {
        navigate('/login-estabelecimento')
      }, 3500)  
    }
    catch {
      toast.error('Dados incorretos, verifique e tente novamente.', {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  }
  
    return (
        <AdminContext.Provider
          value={{
            adminRegister,
            uploadAdmin,
            dropFile,
            setFile,
            adminLogin,
            cookies,
            setCookie,
            adminLoginGoogle,
            adminLoginFacebook,
            adminAuthLogin,
            sendEmailAdmin,
            resetPasswordAdmin
          }}>
          {children}
        </AdminContext.Provider>
      );
}

export default AdminProvider