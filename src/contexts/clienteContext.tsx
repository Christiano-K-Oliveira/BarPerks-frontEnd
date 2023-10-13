import { Dispatch, SetStateAction, createContext, useEffect, useState } from "react";
import api from "../services/api";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import { iSendEmail } from "../interfaces/user/recoverPassword.interface";
import { iClientInfo, iFormUserEdit, iProduct, iPub, iSearchPub } from "../interfaces/user/user.interface";
import { iListHistoryRewards } from "../interfaces/user/historyRewards.interface";
import { useGoogleLogout } from "react-google-login";

interface iClientProviderProps {
    children: React.ReactNode;   
}

interface iRegisterData {
    id?: number;
    name: string;
    birth_date: string;
    cpf: string;
    email: string;
    password: string;
    telephone: string;
}

interface iLoginData {
    email: string;
    password: string;
}


interface iClientContext {
    clientRegister: (clientData: iRegisterData) => Promise<void>;
    uploadClient: (id: number, data: File) => Promise<void>;
    dropFile: File | null;
    setFile: Dispatch<SetStateAction<File | null>>;
    clientLogin: (loginData: iLoginData) => Promise<void>;
    cookies: { token?: string };
    setCookie: (name: "token", value: string, options?: object | undefined) => void;
    clientLoginGoogle: (email: string) => Promise<void>;
    clientLoginFacebook: (email: string) => Promise<void>;
    clientAuthLogin: (token: string) => Promise<void>;
    sendEmailClient: (data: iSendEmail) => Promise<void>;
    resetPasswordClient: (token: string, data: { password: string }) => Promise<void>;
    getClientInfo: (token: string) => Promise<void>;
    clientInfo: iClientInfo | undefined;
    setClientInfo: Dispatch<SetStateAction<iClientInfo | undefined>>;
    exitClient: () => Promise<void>;
    updateClient: (data: iFormUserEdit, id: number) => Promise<void>;
    getListHistoryRewards: () => Promise<void>;
    listHistoryRewards: iListHistoryRewards[] |  [];
    setListHistoryRewards: Dispatch<SetStateAction<iListHistoryRewards[] | []>>;
    searchPub: iPub | undefined;
    setSearchPub: Dispatch<SetStateAction<iPub | undefined>>;
    getPub: (data: iSearchPub) => Promise<void>;
    listProducts: iProduct[] | [];
    setListProducts: Dispatch<SetStateAction<iProduct[] | []>>;
    getProducts: () => Promise<void>;
    filterListProducts: iProduct[] | [];
    setFilterListProducts: Dispatch<SetStateAction<iProduct[] | []>>;
}
  

export const ClientContext = createContext({} as iClientContext);

const ClientProvider = ({ children }: iClientProviderProps) => {
    const [dropFile, setFile] = useState<File | null>(null);
    const navigate = useNavigate()
    const [cookies, setCookie, removeCookie] = useCookies(['token']);
    const [ clientInfo, setClientInfo] = useState<iClientInfo | undefined>()
    const [ listHistoryRewards, setListHistoryRewards ] = useState<iListHistoryRewards[]>([])
    const [ searchPub, setSearchPub ] = useState<iPub>()
    const [ listProducts, setListProducts ] = useState<iProduct[]>([])
    const [filterListProducts, setFilterListProducts ] = useState<iProduct[]>([])
    const { signOut } = useGoogleLogout({
        clientId: "481227944368-euu396jbn5pnafft63hn4d6rpsgqu121.apps.googleusercontent.com",
        cookiePolicy: "single_host_origin",
    })

    useEffect(() => {
        const cookie = cookies['token']

        getClientInfo(cookie)
        getListHistoryRewards()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [cookies]);

    const clientRegister = async (clientData: iRegisterData): Promise<void> => {
        try {
            const res = await api.post<iRegisterData>("clients", clientData);

            if(res.data.id && dropFile){
                uploadClient(res.data.id, dropFile)
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
                window.location.replace('/login-cliente')
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
    const uploadClient = async (id: number, data: File): Promise<void> => {
        const config = {headers: {"Content-Type": "multipart/form-data"}}
        const file = new FormData()
    
        if(data.name.includes("jpg") || data.name.includes("jpeg") || data.name.includes("png")){
          file.append("file", data)
          await api.patch(`clients/upload/${id}`, file, config)
    
          setFile(null)
        }    
    }

    const clientLogin = async (loginData: iLoginData): Promise<void> => {
        try {
            const res = await api.post('login-client', loginData)
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
                navigate('/usuario')
            }, 3500)                  
        }
        catch (erro){
          toast.error('Dados inválidos.', {
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
    const clientLoginGoogle = async (email: string): Promise<void> => {
        try {
            const res = await api.post('login-google-client', { email: email })
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
            toast.error('Cliente não cadastrado, faça o seu cadastro.', {
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
                navigate('/inscricao-cliente')
            }, 3500)  
        }
    }
    const clientLoginFacebook = async (email: string): Promise<void> => {
        try {
            const res = await api.post('login-facebook-client', { email: email })
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
            toast.error('Cliente não cadastrado, faça o seu cadastro.', {
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
                navigate('/inscricao-cliente')
            }, 3500)  
        }
    }
    const clientAuthLogin = async (token: string): Promise<void> => {
        try {
            await api.get('clients', {
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

    const sendEmailClient = async (data: iSendEmail): Promise<void> => {
        try {
          await api.post('clients/recuperar-senha', data)
    
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
    const resetPasswordClient = async (token: string, data: { password: string; }): Promise<void> => {
        try {
          await api.patch(`clients/recuperar-senha/${token}`, data)
    
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
              navigate('/login-cliente')
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

    const getClientInfo = async (token: string): Promise<void> => {
        try {
            const res = await api.get('clients', {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`                
                }
            })

            const data: iClientInfo = {
                id: res.data.id,
                name: res.data.name,
                birth_date: res.data.birth_date,
                email: res.data.email,
                cpf: res.data.cpf,
                telephone: res.data.telephone,
                photo_url: res.data.photo_url
            }
            setClientInfo(data)
        }
        catch (erro){
            console.log(erro)
        }
    }
    const exitClient = async () => {
        removeCookie("token")
        signOut()

        navigate("/")
    }
    const updateClient = async (data: iFormUserEdit, id: number): Promise<void> => {
        try {
            const token = cookies["token"]

            await api.patch(`clients/${id}`, data, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`                
                }
            })

            if(id && dropFile){
                await uploadClient(id, dropFile)
            }

            getClientInfo(token)

            toast.success('Dados atualizados com sucesso!', {
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
            toast.error('Ops, algo de errado!', {
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

    const getListHistoryRewards = async (): Promise<void> => {
        try {
            const token = cookies["token"]

            const res = await api.get("client/rescue-history", {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`    
                }
            })
            
            setListHistoryRewards(res.data)
        }
        catch(err) {
            console.log(err)
        }
    }

    const getPub = async (data: iSearchPub): Promise<void> => {
        try {
            const token = cookies["token"]

            const res = await api.get(`client/registered-clients/${data.name}/${data.socialNumber}`, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`   
                }
            })

            await setSearchPub(res.data)

            getProducts()
        }
        catch {
            toast.error('Bar não encontrado.', {
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
    const getProducts = async (): Promise<void> => {
        try{
            const token = cookies["token"]

            const res = await api.get(`products/${searchPub!.pub.id}`, { 
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`    
                } 
            })

            setListProducts(res.data)
        }
        catch (erro){
            console.log(erro)
        }
    }

    return (
        <ClientContext.Provider
            value={{
                clientRegister,
                clientLogin,
                uploadClient,
                dropFile,
                setFile,
                cookies,
                setCookie,
                clientLoginGoogle,
                clientLoginFacebook,
                clientAuthLogin,
                sendEmailClient,
                resetPasswordClient,
                getClientInfo,
                clientInfo,
                setClientInfo,
                exitClient,
                updateClient,
                getListHistoryRewards,
                listHistoryRewards,
                setListHistoryRewards,
                searchPub,
                setSearchPub,
                getPub,
                getProducts,
                listProducts,
                setListProducts,
                filterListProducts,
                setFilterListProducts,
            }}>
            {children}
        </ClientContext.Provider>
      );
}

export default ClientProvider