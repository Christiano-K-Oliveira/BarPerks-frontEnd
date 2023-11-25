import { Dispatch, SetStateAction, createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { api, apiMercadoPago } from "../services/api";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import { iSendEmail } from "../interfaces/user/recoverPassword.interface";
import { iAdminInfo, iFormRegisterClient, iFormSearchClient, iFormAdminEdit, iProduct, iRegisterProduct, iSearchClient, iSearchReward, iUpdateProduct, iUpdateRegisterClient, iPlan } from "../interfaces/user/user.interface";
import { iListHistoryRewardsClient } from "../interfaces/user/historyRewards.interface";

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
  adminAuthLogin: (token: string) => Promise<void>;
  sendEmailAdmin: (data: iSendEmail) => Promise<void>;
  resetPasswordAdmin: (token: string, data: { password: string; }) => Promise<void>;
  getAdminInfo: (token: string) => Promise<void>;
  adminInfo: iAdminInfo | undefined;
  setAdminInfo: Dispatch<SetStateAction<iAdminInfo | undefined>>;
  exitAdmin: () => Promise<void>;
  updateAdmin: (data: iFormAdminEdit, id: number) => Promise<void>;
  registerClient: (data: iFormRegisterClient) => Promise<void>;
  registerProduct: (data: iRegisterProduct) => Promise<void>;
  editProductsModal: boolean;
  setEditProductsModal: Dispatch<SetStateAction<boolean>>;
  getProducts: (token: string) => Promise<void>;
  listProducts: iProduct[] | [];
  setListProducts: Dispatch<SetStateAction<iProduct[] | []>>;
  excludeProduct: (id: number) => Promise<void>;
  modalEditProduct: boolean;
  setModalEditProduct: Dispatch<SetStateAction<boolean>>;
  idProduct: number | undefined;
  setIdProduct: Dispatch<SetStateAction<number | undefined>>;
  updateProduct: (data: iUpdateProduct) => Promise<void>;
  searchUser: iSearchClient[] | [];
  setSearchUser: Dispatch<SetStateAction<iSearchClient[] | []>>;
  getClient: (data: iFormSearchClient) => Promise<void>;
  modalEditRegisterClient: boolean;
  setModalEditRegisterClient: Dispatch<SetStateAction<boolean>>;
  idRegisterClient: number | undefined;
  setIdRegisterClient: Dispatch<SetStateAction<number | undefined>>;
  updateRegisterClient: (data: iUpdateRegisterClient) => Promise<void>;
  modalListRegisterClient: boolean;
  setModalListRegisterClient: Dispatch<SetStateAction<boolean>>;
  listRegisterClient: iSearchClient[] | [];
  setListRegisterClient: Dispatch<SetStateAction<iSearchClient[] | []>>;
  getListClients: () => Promise<void>;
  excludeRegisterClient: (id: number) => Promise<void>;
  modalRescueRewards: boolean;
  setModalRescueRewards: Dispatch<SetStateAction<boolean>>;
  getListRewardsClient: (id: number | undefined) => Promise<void>;
  listRewardsClient: iListHistoryRewardsClient[] | [];
  setListRewardsClient: Dispatch<SetStateAction<iListHistoryRewardsClient[] | []>>;
  updateRescueHistory: (data: iSearchReward, idRescueHistory: number) => Promise<void>;
  idClient: number | undefined;
  setIdClient: Dispatch<SetStateAction<number | undefined>>;
  getRescueHistory: (data: iSearchReward) => Promise<void>;
  updatePointsRegisterClient: (data: iUpdateRegisterClient) => Promise<void>;
  linkQrCode: string;
  setLinkQrCode: Dispatch<SetStateAction<string>>;
  buyPlan: (plan: string) => Promise<void>;
  excludeAdmin: (id: number) => Promise<void>;
  plan: iPlan | undefined;
  setPlan: Dispatch<SetStateAction<iPlan | undefined>>;
  getPlan: () => Promise<void>;
}
  
export const AdminContext = createContext({} as iAdminContext);

const AdminProvider = ({ children }: iAdminProviderProps) => {
  const [dropFile, setFile] = useState<File | null>(null);
  const navigate = useNavigate()
  const [cookies, setCookie, removeCookie] = useCookies(['token']);
  const [ adminInfo, setAdminInfo] = useState<iAdminInfo | undefined>()
  const [ editProductsModal, setEditProductsModal ] = useState(false)
  const [ listProducts, setListProducts ] = useState<iProduct[] | []>([])
  const [ modalEditProduct, setModalEditProduct ] = useState(false)
  const [ idProduct, setIdProduct ] = useState<number>()
  const [ searchUser, setSearchUser ] = useState<iSearchClient[]>([])
  const [ modalEditRegisterClient, setModalEditRegisterClient ] = useState(false)
  const [ idRegisterClient, setIdRegisterClient ] = useState<number>()
  const [ listRegisterClient, setListRegisterClient ] = useState<iSearchClient[]>([])
  const [ modalListRegisterClient, setModalListRegisterClient ] = useState(false)
  const [ modalRescueRewards, setModalRescueRewards ] = useState(false)
  const [ listRewardsClient, setListRewardsClient ] = useState<iListHistoryRewardsClient[]>([])
  const [ idClient, setIdClient ] = useState<number>()
  const [ linkQrCode, setLinkQrCode ] = useState("https://...")
  const [ plan, setPlan ] = useState<iPlan>()

  useEffect(() => {
    const cookie = cookies['token']

    getAdminInfo(cookie)
    getProducts(cookie)
    getPlan()
    getListClients()

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

  const adminRegister = async (pubData: iRegisterData): Promise<void> => {
      try {
          const res = await api.post<iRegisterData>("pubs", pubData)
          await api.post("plans", { name: "Sem Plano", pub_id: res.data.id })

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
            window.location.replace('/login-estabelecimento')
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

      setFile(null) 
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

  const getAdminInfo = async (token: string): Promise<void> => {  
    try {
      const res = await api.get('pubs', {
          headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${token}`                
          }
      })

      const data: iAdminInfo = {
          id: res.data.id,
          name: res.data.name,
          social_number: res.data.social_number,
          email: res.data.email,
          telephone: res.data.telephone,
          photo_url: res.data.photo_url
      }
      setAdminInfo(data)
    }
    catch (erro){
      console.log(erro)
    }
  }
  const exitAdmin = async () => {
    removeCookie("token")

    navigate("/")
  }
  const updateAdmin = async (data: iFormAdminEdit, id: number): Promise<void> => { 
    try {
        const token = cookies["token"]

        await api.patch(`pubs/${id}`, data, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`                
            }
        })

        if(id && dropFile){
          await uploadAdmin(id, dropFile)
        }

        getAdminInfo(token)

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
  const excludeAdmin = async (id: number): Promise<void> => {
    try {
      const token = cookies["token"]

      await api.delete(`pubs/${id}`, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`    
        }
      })

      toast.success('Conta excluída com sucesso!', {
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
        removeCookie("token")

        navigate("/")
      }, 3200)

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
  const getPlan = async (): Promise<void> => {
    try {
      const token = cookies["token"]

      const res = await api.get('plans', {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`                
        }
      })

      setPlan(res.data)
    }
    catch (erro){
      console.log(erro)
    }
  }

  const registerClient = async (data: iFormRegisterClient): Promise<void> => {
    try {
      const token = cookies["token"]

      if(plan!.name == "Sem Plano"){
        if(listRegisterClient.length < 100){
          await api.post('pub/registered-clients', data, {
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${token}` 
            }
          })
        }
        else{
          toast.error('Sem Plano, permitido apenas o registro de 100 clientes.', {
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
      else if(plan!.name == "Plano Padrão"){
        if(listRegisterClient.length < 500){
          await api.post('pub/registered-clients', data, {
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${token}` 
            }
          })
        }
        else{
          toast.error('Plano Padrão, permitido apenas o registro de 500 clientes.', {
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
      else{
        await api.post('pub/registered-clients', data, {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}` 
          }
        })
      }
  
      toast.success('Cliente registrado com sucesso!', {
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
      toast.error('Dados incorretos ou este cliente já esta cadastrado.', {
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

  const uploadProduct = async(id: number, data: File, token: string): Promise<void> => {
    const config = {headers: {
      "Content-Type": "multipart/form-data",
      'Authorization': `Bearer ${token}` 
    }}
    const file = new FormData()

    if(data.name.includes("jpg") || data.name.includes("jpeg") || data.name.includes("png")){
      file.append("file", data)
      await api.patch(`products/upload/${id}`, file, config)

      setFile(null) 
    }
  }
  const registerProduct = async (data: iRegisterProduct): Promise<void> => {
    try {
      const token = cookies["token"]

      const res = await api.post('products', data, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}` 
        }
      })

      if(dropFile && res.data.id){
        await uploadProduct(res.data.id, dropFile, token)
      }

      getProducts(token)

      toast.success('Produto cadastrado com sucesso!', {
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
    catch (erro) {
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
  const getProducts = async (token: string): Promise<void> => {
    try{
      const res = await api.get('products', {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}` 
        }
      })

      setListProducts(res.data)
    }
    catch(erro) {
      console.log(erro)
    }
  }
  const excludeProduct = async (id: number): Promise<void> => {
    const token = cookies["token"]

    try {
      await api.delete(`products/${id}`, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}` 
        }
      })

      getProducts(token)

      toast.success('Produto excluído com sucesso!', {
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
  const updateProduct = async (data: iUpdateProduct): Promise<void> => {
    try {
      const token = cookies["token"]

      if(data.name === ''){
        delete data.name
      }
      if(data.code === ''){
        delete data.code
      }
      if(data.value === ''){
        delete data .value
      }

      await api.patch(`products/${idProduct}`, data, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        }
      })

      if(dropFile && idProduct){
        await uploadProduct(idProduct, dropFile, token)
      }

      getProducts(token)

      toast.success('Produto atualizado com sucesso!', {
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

  const getClient = async (data: iFormSearchClient): Promise<void> => {
    try{
      const token = cookies["token"]

      const res = await api.get(`pub/registered-clients/${data.name}/${data.cpf}`, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}` 
        }
      })

      await setSearchUser(res.data)
    }
    catch {
      toast.error('Registro de cliente não encontrado.', {
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
  const updateRegisterClient = async (data: iUpdateRegisterClient): Promise<void> => {
    try{
      const token = cookies["token"]

      const removeEmptyProperties = (obj: iUpdateRegisterClient) => {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        return Object.fromEntries(Object.entries(obj).filter(([_, v]) => v != ""));
      }
      const dataFilter = removeEmptyProperties(data)
    
      const res = await api.patch(`pub/registered-clients/${idRegisterClient}`, dataFilter, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}` 
        }
      })

      getClient({
        name: res.data.name,
        cpf: res.data.cpf
      })

      getListClients()

      toast.success('Registro de cliente atualizado com sucesso!', {
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
      toast.error('Ops, algo deu errado.', {
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
  const updatePointsRegisterClient = async (data: iUpdateRegisterClient): Promise<void> => {
    try{
      const token = cookies["token"]

      const getRegisterClient = await api.get(`pub/registered-clients/${data.name}/${data.cpf}`, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}` 
        }
      })

      const newData = {
        old_points: getRegisterClient.data[0].points,
        points: (+getRegisterClient.data[0].points + +data.points!) + "",
        link_qrcode: create_UUID(),
      }
    
      const res = await api.patch(`pub/registered-clients/${getRegisterClient.data[0].id}`, newData, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}` 
        }
      })

      setLinkQrCode(res.data.link_qrcode)

      toast.success('Pontuação registrada com sucesso!', {
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
      toast.error('Ops, algo deu errado.', {
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
  const getListClients = async (): Promise<void> => {
    try {
      const token = cookies["token"]

      const res = await api.get('pub/registered-clients', {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}` 
        }
      })

      setListRegisterClient(res.data)
    }
    catch(erro) {
      console.log(erro)
    }
  }
  const excludeRegisterClient = async (id: number): Promise<void> => {
    try {
      const token = cookies["token"]

      await api.delete(`pub/registered-clients/${id}`, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}` 
        }
      })

      getListClients()
      setSearchUser([])

      toast.success('Registro de cliente excluído com sucesso!', {
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
      toast.error('Registro de cliente não encontrado.', {
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

  const getListRewardsClient = async (id: number | undefined): Promise<void> => {
    try {
      const token = cookies["token"]

      const res = await api.get(`pub/rescue-history/${id ? id : idClient}`, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}` 
        }
      })
      
      const dataFilter = res.data.reverse().filter((item: iListHistoryRewardsClient) => {
        if(item.status !== "disponivel"){
          const data  = item.rescue_date.split("/", 3);
          const date = new Date();

          if(+data[2].split(",")[0] - date.getFullYear() >= 0 && +data[1] - date.getMonth() + 1 >= 0 || +data[0] - date.getDate() >= 0){
            return item
          }
        }
      })

      setListRewardsClient(dataFilter)
    }
    catch(erro) {
      console.log(erro)
    }
  }
  const getRescueHistory = async (data: iSearchReward): Promise<void> => {
    try{
      const token = cookies["token"]

      const res = await api.get(`pub/rescue-history/search/${idClient}/${data.code_rescue}`, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}` 
        }
      })

      updateRescueHistory(data, res.data.id)

    }
    catch {
      toast.error('Código de resgate inválido.', {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });    }
  }
  const updateRescueHistory = async (data: iSearchReward, idRescueHistory: number): Promise<void> => {
    try {
      const token = cookies["token"]
      const date = new Date().toLocaleString()
      const newData = {
        status: "resgatado",
        rescue_date: date,
        ...data,
      }

      await api.patch(`pub/rescue-history/${idRescueHistory}`, newData, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}` 
        }
      })

      getListRewardsClient(idClient)

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
    catch {
      toast.error('Código de resgate inválido.', {
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

  const buyPlan = async (plan: string): Promise<void> => {
    try{
      const premium = {
        notification_url: "https://barperks-backend.onrender.com/pubs/plan",
        items: [
          {
            id: adminInfo!.email,
            description: "Plano Premium de 6 meses para estabelecimento na plataforma bar perks.", 
            title: "Plano Premium",
            quantity: 1,
            currency_id: "BRL",
            unit_price: 50.0
          }
        ]
      }
      const standart = {
        notification_url: "https://barperks-backend.onrender.com/pubs/plan",
        items: [
          {
            id: adminInfo!.email,
            description: "Plano Padrão de 6 meses para estabelecimento na plataforma bar perks.", 
            title: "Plano Padrão",
            quantity: 1,
            currency_id: "BRL",
            unit_price: 30.0
          }
        ]
      }

      const token = "APP_USR-2600481674697355-110617-ebde29dc7f6bbd01fd4beaffdc12f070-74670153"

      if(plan === 'premium'){
        const res = await apiMercadoPago.post('', premium, {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}` 
          }
        })

        window.open(res.data.init_point, '_blank')
      }
      else{
        const res = await apiMercadoPago.post('', standart, {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}` 
          }
        })

        window.open(res.data.init_point, '_blank')
      }
    }
    catch {
      toast.error('Ops, algo deu errado..', {
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
        adminAuthLogin,
        sendEmailAdmin,
        resetPasswordAdmin,
        adminInfo,
        setAdminInfo,
        getAdminInfo,
        exitAdmin,
        updateAdmin,
        registerClient,
        registerProduct,
        editProductsModal,
        setEditProductsModal,
        getProducts,
        listProducts,
        setListProducts,
        excludeProduct,
        modalEditProduct,
        setModalEditProduct,
        idProduct,
        setIdProduct,
        updateProduct,
        searchUser,
        setSearchUser,
        getClient,
        modalEditRegisterClient,
        setModalEditRegisterClient,
        idRegisterClient,
        setIdRegisterClient,
        updateRegisterClient,
        listRegisterClient,
        setListRegisterClient,
        modalListRegisterClient,
        setModalListRegisterClient,
        getListClients,
        excludeRegisterClient,
        modalRescueRewards,
        setModalRescueRewards,
        getListRewardsClient,
        listRewardsClient,
        setListRewardsClient,
        updateRescueHistory,
        idClient,
        setIdClient,
        getRescueHistory,
        updatePointsRegisterClient,
        linkQrCode,
        setLinkQrCode,
        buyPlan,
        excludeAdmin,
        plan, 
        setPlan,
        getPlan,
      }}>
      {children}
    </AdminContext.Provider>
  );
}

export default AdminProvider