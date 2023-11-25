import { DivBox, DivBoxMobile, DivOlderAge, FormStyle, InputFile, LabelFile, LinkForgotPassword, Span } from "./style"
import { iFormInscricao, iFormInscricaoUser, iSectionFormInscricao, iSectionFormInscricaoUser } from "../../interfaces/inscricao/inscricao.interface";
import { InputLogin, InputRegisterAdmin, InputRegisterUser } from "./Input";
import ButtonForm from "./Button";
import LinkLogin from "./LinkLogin";
import { SubmitHandler, useForm } from "react-hook-form";
import ReCAPTCHA from "react-google-recaptcha";
import { iFormLogin } from "../../interfaces/login/login.interface";
import { loginSchema } from "../../schemas/login.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useCallback, useContext, useState } from "react";
import { useDropzone } from "react-dropzone";
import { AdminContext } from "../../contexts/administradorContext";
import { toast } from "react-toastify";
import { ClientContext } from "../../contexts/clienteContext";


const FormInscricaoAdmin = ({
    name,
    socialNumber,
    email,
    password,
    passwordRepeated,
    phone,
    address,
    state,
    city,
    postalCode,
    register,
    handleSubmit,
    errors
}: iSectionFormInscricao) => {
    const [ recaptcha, setRecaptcha ] = useState(false)
    const { dropFile, setFile, adminRegister } = useContext(AdminContext)

    const onDrop = useCallback((file: File[]) => {
        setFile(file[0])
    }, [setFile])

    const { getRootProps, getInputProps } = useDropzone({
        onDrop,
        accept: {
            "image/jpeg": [".jpg", ".jpeg"],
            "image/png": [".png"]
        }
    })

    const submitRegister: SubmitHandler<iFormInscricao> = (registerData: iFormInscricao) => {
        const data = {
            ...registerData,
            social_number: registerData.socialNumber,
            telephone: registerData.phone,
            postal_code: registerData.postalCode,
        }

        if(recaptcha){
            adminRegister(data)
        }
        else {   
            toast.error('Recaptcha não assinado, tente novamente.', {
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

    return (
        <FormStyle onSubmit={handleSubmit(submitRegister)}>

            <InputRegisterAdmin id={name} type="text"  placeholder={name} register={register} name="name"/>
            { errors.name?.message ? <Span>{errors.name.message}</Span> : null }

            <InputRegisterAdmin id={socialNumber} type="text"  placeholder={socialNumber} register={register} name="socialNumber"/>
            { errors.socialNumber?.message ? <Span>{errors.socialNumber.message}</Span> : null }

            <InputRegisterAdmin id={email} type="email"  placeholder={email} register={register} name="email"/>
            { errors.email?.message ? <Span>{errors.email.message}</Span> : null }

            <InputRegisterAdmin id={password} type="password"  placeholder={password} register={register} name="password"/>
            { errors.password?.message ? <Span>{errors.password.message}</Span> : null }

            <InputRegisterAdmin id={passwordRepeated} type="password"  placeholder={passwordRepeated} register={register} name="passwordRepeated"/>
            { errors.passwordRepeated?.message ? <Span>{errors.passwordRepeated.message}</Span> : null }

            <InputRegisterAdmin id={phone} type="text"  placeholder={phone} register={register} name="phone"/>
            { errors.phone?.message ? <Span>{errors.phone.message}</Span> : null }

            <InputRegisterAdmin id={address} type="text"  placeholder={address} register={register} name="address"/>
            { errors.address?.message ? <Span>{errors.address.message}</Span> : null }

            <InputRegisterAdmin id={state} type="text"  placeholder={state} register={register} name="state"/>
            { errors.state?.message ? <Span>{errors.state.message}</Span> : null }

            <InputRegisterAdmin id={city} type="text"  placeholder={city} register={register} name="city"/>
            { errors.city?.message ? <Span>{errors.city.message}</Span> : null }

            <InputRegisterAdmin id={postalCode} type="text"  placeholder={postalCode} register={register} name="postalCode"/>
            { errors.postalCode?.message ? <Span>{errors.postalCode.message}</Span> : null }

            <div { ...getRootProps() }>
                <LabelFile htmlFor="dropzone-file">Escolha sua Foto</LabelFile>
                <div style={{display: 'flex', alignItems: 'center', marginBottom: '20px'}}>
                    <InputFile type="button" id="drop-file" value='Escolher arquivo'/>
                    <InputFile style={{display: "none"}} id="dropzone-file" placeholder='Escolher arquivo' { ...getInputProps() }/>
                    <span style={{display: 'flex', marginLeft: '5px', cursor: 'pointer'}}>{dropFile === null ? 'Nenhum arquivo selecionado...' : dropFile.name}</span>
                </div>
            </div>

            <DivBox>
                <ReCAPTCHA sitekey="6LciMbUoAAAAAOgXKZYpbYaxG9Emi7wHazWDUXOd" size="normal" onChange={() => recaptcha ? setRecaptcha(false) : setRecaptcha(true)}/>
            </DivBox>

            <DivBoxMobile>
                    <ReCAPTCHA sitekey="6LciMbUoAAAAAOgXKZYpbYaxG9Emi7wHazWDUXOd" size="compact" onChange={() => recaptcha ? setRecaptcha(false) : setRecaptcha(true)}/>
            </DivBoxMobile>

            <ButtonForm name="Registre-se"/>
            <LinkLogin/>
        </FormStyle>
    )
}

const FormInscricaoUser = ({
    name,
    birthDate,
    socialNumber,
    email,
    password,
    passwordRepeated,
    phone,
    register,
    handleSubmit,
    errors
}: iSectionFormInscricaoUser) => {
    const [ recaptcha, setRecaptcha ] = useState(false)
    const [ errorOlderAge, setErrorOlderAge ] = useState(1)
    const [isOlderAge, setIsOlderAge] = useState(false)
    const { dropFile, setFile, clientRegister } = useContext(ClientContext)

    const onDrop = useCallback((file: File[]) => {
        setFile(file[0])
    }, [setFile])

    const { getRootProps, getInputProps } = useDropzone({
        onDrop,
        accept: {
            "image/jpeg": [".jpg", ".jpeg"],
            "image/png": [".png"]
        }
    })

    const submitRegister: SubmitHandler<iFormInscricaoUser> = (registerData: iFormInscricaoUser) => {
        const data = {
            name: registerData.name,
            birth_date: registerData.birthDate,
            cpf: registerData.socialNumber,
            email: registerData.email,
            password: registerData.password,
            telephone: registerData.phone
        }

        if(recaptcha){
            if(errorOlderAge % 2 === 0){
                clientRegister(data)
            }
        }
        else {   
            toast.error('Recaptcha não assinado, tente novamente.', {
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


    return (
        <FormStyle onSubmit={handleSubmit(submitRegister)}>

            <InputRegisterUser id={name} type="text"  placeholder={name} register={register} name="name"/>
            { errors.name?.message ? <Span>{errors.name.message}</Span> : null }

            <InputRegisterUser id={birthDate} type="text"  placeholder={birthDate} register={register} name="birthDate"/>
            { errors.birthDate?.message ? <Span>{errors.birthDate.message}</Span> : null }

            <InputRegisterUser id={socialNumber} type="text"  placeholder={socialNumber} register={register} name="socialNumber"/>
            { errors.socialNumber?.message ? <Span>{errors.socialNumber.message}</Span> : null }

            <InputRegisterUser id={email} type="email"  placeholder={email} register={register} name="email"/>
            { errors.email?.message ? <Span>{errors.email.message}</Span> : null }

            <InputRegisterUser id={password} type="password"  placeholder={password} register={register} name="password"/>
            { errors.password?.message ? <Span>{errors.password.message}</Span> : null }

            <InputRegisterUser id={passwordRepeated} type="password"  placeholder={passwordRepeated} register={register} name="passwordRepeated"/>
            { errors.passwordRepeated?.message ? <Span>{errors.passwordRepeated.message}</Span> : null }

            <InputRegisterUser id={phone} type="text"  placeholder={phone} register={register} name="phone"/>
            { errors.phone?.message ? <Span>{errors.phone.message}</Span> : null }

            <div { ...getRootProps() }>
                <LabelFile htmlFor="drop-file">Escolha sua Foto</LabelFile>
                <div style={{display: 'flex', alignItems: 'center', marginBottom: '20px'}}>
                    <InputFile type="button" id="drop-file" value='Escolher arquivo'/>
                    <InputFile style={{display: "none"}} id="drop-file" placeholder='Escolher arquivo' { ...getInputProps() }/>
                    <span style={{display: 'flex', marginLeft: '5px', cursor: 'pointer'}}>{dropFile === null ? 'Nenhum arquivo selecionado...' : dropFile.name}</span>
                </div>
            </div>

            <DivOlderAge>
                <input id="checkAge" type="checkbox" placeholder={birthDate} onChange={() => {
                    setErrorOlderAge(errorOlderAge + 1)
                    isOlderAge ? setIsOlderAge(false) : setIsOlderAge(true) 
                    }
                }/>
                <label htmlFor="checkAge">Declaro ser maior de 18 anos</label>
            </DivOlderAge>
            { isOlderAge ? <Span style={{marginTop: "-25px", marginBottom: "30px", display: errorOlderAge % 2 === 0 ? "none" : "flex"}}>Obrigatório a assinatura</Span> : null }

            <DivBox>
                <ReCAPTCHA sitekey="6LciMbUoAAAAAOgXKZYpbYaxG9Emi7wHazWDUXOd" size="normal" onChange={() => recaptcha ? setRecaptcha(false) : setRecaptcha(true)}/>
            </DivBox>

            <DivBoxMobile>
                    <ReCAPTCHA sitekey="6LciMbUoAAAAAOgXKZYpbYaxG9Emi7wHazWDUXOd" size="compact" onChange={() => recaptcha ? setRecaptcha(false) : setRecaptcha(true)}/>
            </DivBoxMobile>

            <ButtonForm name="Registre-se" olderAge={isOlderAge} errorOlderAge={setIsOlderAge}/>
            <LinkLogin/>
        </FormStyle>
    )
}


const FormLogin = () => {
    const [ recaptcha, setRecaptcha ] = useState(false)
    const url: string = window.location.pathname
    const { clientLogin } = useContext(ClientContext)
    const { adminLogin } = useContext(AdminContext)

    const { register, handleSubmit, formState: { errors } } = useForm<iFormLogin>({
        resolver: zodResolver(loginSchema),
    });

    const submitLogin: SubmitHandler<iFormLogin> = (loginData: iFormLogin) => {
        if(recaptcha){
            if(url === '/login-cliente'){
                clientLogin(loginData)
            }
            if(url === '/login-estabelecimento'){
                adminLogin(loginData)
            }
        }
        else{
            toast.error('Recaptcha não assinado, tente novamente.', {
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

    return (
        <FormStyle onSubmit={handleSubmit(submitLogin)}>
            <InputLogin id="email" type="email" placeholder="E-mail" register={register} name="email"/>
            { errors.email?.message ? <Span>{errors.email.message}</Span> : null }

            <InputLogin id="password" type="password" placeholder="Senha" register={register} name="password"/>
            { errors.password?.message ? <Span>{errors.password.message}</Span> : null }

            <LinkForgotPassword href="/recuperar-senha">Esqueceu a senha?</LinkForgotPassword>
            <DivBoxMobile>
                <ReCAPTCHA sitekey="6LciMbUoAAAAAOgXKZYpbYaxG9Emi7wHazWDUXOd" size="compact" onChange={() => recaptcha ? setRecaptcha(false) : setRecaptcha(true)}/>
            </DivBoxMobile>

            <DivBox>
                <ReCAPTCHA sitekey="6LciMbUoAAAAAOgXKZYpbYaxG9Emi7wHazWDUXOd" size="normal" onChange={() => recaptcha ? setRecaptcha(false) : setRecaptcha(true)}/>
            </DivBox>

            <ButtonForm name="Fazer Login"/>
        </FormStyle>
    )
}

export { FormInscricaoAdmin, FormInscricaoUser, FormLogin }