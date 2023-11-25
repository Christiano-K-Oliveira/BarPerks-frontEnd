import { Dispatch, SetStateAction, createContext, useEffect, useState } from "react";
import { api } from "../services/api";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import { iSendEmail } from "../interfaces/user/recoverPassword.interface";
import { iClientInfo, iFormUserEdit, iProduct, iPub, iSearchPub, iValidPoints } from "../interfaces/user/user.interface";
import { iListHistoryRewards, iRewardInfo } from "../interfaces/user/historyRewards.interface";

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
    modalConfReward: boolean;
    setModalConfReward: Dispatch<SetStateAction<boolean>>;
    createHistoryReward: () => Promise<void>;
    updatePoints: () => Promise<string | void>;
    rewardInfo: iRewardInfo | undefined;
    setRewardInfo: Dispatch<SetStateAction<iRewardInfo | undefined>>;
    validatePoints: (qrcode: string) => Promise<void>;
    points: iValidPoints | undefined;
    setPoints: Dispatch<SetStateAction<iValidPoints | undefined>>;
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
    const [ modalConfReward, setModalConfReward ] = useState(false)
    const [ rewardInfo, setRewardInfo ] = useState<iRewardInfo>()
    const [ points, setPoints ] = useState<iValidPoints>()

    useEffect(() => {
        const cookie = cookies['token']

        getClientInfo(cookie)
        getListHistoryRewards()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [cookies]);

    function create_UUID(){
        let dt = new Date().getTime();
        const uuid = 'xyxxxxxxxx'.replace(/[xy]/g, function(c) {
            const r = (dt + Math.random()*16)%16 | 0;
            dt = Math.floor(dt/16);
            return (c=='x' ? r :(r&0x3|0x8)).toString(16);
        });
        return uuid;
    }

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

            const dataFilter = res.data.reverse().filter((item: iListHistoryRewards) => {
                const ano  = item.date.split("-")[0];
                const mes  = item.date.split("-")[1];
                const dia  = item.date.split("-")[2];

                const date = new Date();


                if(+ano - date.getFullYear() >= 0 && (+mes + 2) - date.getMonth() + 1 >= 0 || +dia - date.getDate() >= 0){
                    return item
                }
            })
            
            setListHistoryRewards(dataFilter)
        }
        catch(err) {
            console.log(err)
        }
    }
    const updatePoints = async (): Promise<string | void> => {
        try {
            const token = cookies["token"]

            await api.patch(`client/registered-clients/${searchPub?.id}`, { points: rewardInfo?.points }, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`  
                }
            })

            return 'ok'
        }
        catch {
            toast.error('Pontos insuficientes.', {
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
    const createHistoryReward = async (): Promise<void> => {
        try {
            const resultUpdate = await updatePoints()

            if(resultUpdate === 'ok'){
                const token = cookies["token"]
    
                const data = {
                    status: "disponivel",
                    reward_name: rewardInfo?.name,
                    code_rescue: create_UUID(),
                }
    
                await api.post(`client/rescue-history/${searchPub!.pub.id}`, data, {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}`    
                    }
                })
    
                getListHistoryRewards()
    
                toast.success('Recompensa resgatada com sucesso!', {
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
    
    const getPub = async (data: iSearchPub): Promise<void> => {
        try {
            const token = cookies["token"]

            const res = await api.get(`client/registered-clients/${data.name}/${data.socialNumber}`, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`   
                }
            })

            setSearchPub(res.data)

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
            const res = await api.get(`products/client/${searchPub?.pub.id}`)

            setListProducts(res.data)
        }
        catch (erro){
            console.log(erro)
        }
    }

    const validatePoints = async (qrcode: string): Promise<void> => {
        try{
            const token = cookies["token"]

            const res = await api.get(`client/registered-clients/${qrcode}`, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                }
            })

            setPoints(res.data)

            toast.success('Validação de pontuação feita com sucesso!', {
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
        catch{
            toast.error('Código de QrCode inválido.', {
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
        <ClientContext.Provider
            value={{
                clientRegister,
                clientLogin,
                uploadClient,
                dropFile,
                setFile,
                cookies,
                setCookie,
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
                modalConfReward,
                setModalConfReward,
                setRewardInfo,
                rewardInfo,
                createHistoryReward,
                updatePoints,
                validatePoints,
                points,
                setPoints,
            }}>
            {children}
        </ClientContext.Provider>
      );
}

export default ClientProvider