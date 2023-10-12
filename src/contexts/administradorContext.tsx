import { Dispatch, SetStateAction, createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import api from "../services/api";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import { iSendEmail } from "../interfaces/user/recoverPassword.interface";
import { iAdminInfo, iFormRegisterClient, iFormSearchClient, iFormUserEdit, iProduct, iRegisterProduct, iSearchClient, iUpdateProduct, iUpdateRegisterClient } from "../interfaces/user/user.interface";

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
  getAdminInfo: (token: string) => Promise<void>;
  adminInfo: iAdminInfo | undefined;
  setAdminInfo: Dispatch<SetStateAction<iAdminInfo | undefined>>;
  exitAdmin: () => Promise<void>;
  updateAdmin: (data: iFormUserEdit, id: number) => Promise<void>;
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

  useEffect(() => {
    const cookie = cookies['token']

    getAdminInfo(cookie)
    getProducts(cookie)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cookies]);

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
  const updateAdmin = async (data: iFormUserEdit, id: number): Promise<void> => { 
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

  const registerClient = async (data: iFormRegisterClient): Promise<void> => {
    try {
      const token = cookies["token"]
  
      await api.post('pub/registered-clients', data, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}` 
        }
      })

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

  const getClient = async(data: iFormSearchClient): Promise<void> => {
    try{
      const token = cookies["token"]

      const res = await api.get(`pub/registered-clients/${data.name}/${data.cpf}`, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}` 
        }
      })

      setSearchUser(res.data)
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

      console.log(res.data)

      // getClient({
      //   name: res.data.name,
      //   cpf: res.data.cpf
      // })

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
      }}>
      {children}
    </AdminContext.Provider>
  );
}

export default AdminProvider