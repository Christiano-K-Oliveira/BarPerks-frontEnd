import FooterUser from "../../components/Footer/FooterUser"
import { ButtonOption, ButtonReset, DivBoxBtnsOpts, FigureLogo, FormRecoverPassword, ImgLogo, InputRecover, LinkLogin, Main, Paragraph, ParagraphCode, SectionRecoverPassword, SpanReset, SpanYellow, TitleLogo, TitleRecover } from "./style"
import IconLogo from "../../assets/images/icon-barperks.svg"
import { iNewPassword, iSendEmail } from "../../interfaces/user/recoverPassword.interface";
import { sendEmailSchema, newPasswordSchema } from "../../schemas/recoverPassword.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { Span } from "../../components/Forms/style";
import { useContext, useState } from "react";
import { ClientContext } from "../../contexts/clienteContext";
import { AdminContext } from "../../contexts/administradorContext";
import { toast } from "react-toastify";
import { useParams } from "react-router-dom";

const RecoverPasswordSendingEmailPage = () => {
    const [ optionClient, setOptionClient ] = useState<boolean>(false)
    const [ optionAdmin, setOptionAdmin ] = useState<boolean>(false)
    const { sendEmailClient } = useContext(ClientContext)
    const { sendEmailAdmin } = useContext(AdminContext)

    const setClient = () => {
        setOptionClient(true)
        setOptionAdmin(false)
    }
    const setAdmin = () => {
        setOptionAdmin(true)
        setOptionClient(false)
    }

    const { register, handleSubmit, formState: { errors } } = useForm<iSendEmail>({
        resolver: zodResolver(sendEmailSchema),
    });

    const submitSendEmail: SubmitHandler<iSendEmail> = (data: iSendEmail) => {
        if(optionClient){
            sendEmailClient(data)
        }
        if(optionAdmin){
            sendEmailAdmin(data)
        }
        if(optionClient == false && optionAdmin == false){
            toast.error('Escolha uma das opções: cliente ou estabelcimento.', {
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
        <>
            <Main>
                <SectionRecoverPassword>
                    <FigureLogo>
                        <TitleLogo>BarPerks</TitleLogo>
                        <ImgLogo src={IconLogo} alt="icon-logo"/>
                    </FigureLogo>

                    <TitleRecover>Esqueceu a senha?</TitleRecover>
                    <SpanReset>Redefina a senha em duas etapas:</SpanReset>

                    <Paragraph>Digite seu e-mail abaixo e lhe enviaremos uma nova senha:</Paragraph>

                    <FormRecoverPassword onSubmit={handleSubmit(submitSendEmail)}>
                        <InputRecover type="email" placeholder="E-mail" { ...register("email") }/>
                        { errors.email?.message ? <Span style={{margin: "5px 0", fontSize: "var(--font-size-5)"}}>{errors.email.message}</Span> : null }
                        <DivBoxBtnsOpts>
                            <ButtonOption type="button" style={optionClient ? {backgroundColor: "var(--yellow-1)"} : {backgroundColor: "var(--white-fixed)"}} onClick={() => setClient()}>Cliente</ButtonOption>
                            <ButtonOption type="button" style={optionAdmin ? {backgroundColor: "var(--yellow-1)"} : {backgroundColor: "var(--white-fixed)"}} onClick={() => setAdmin()}>Estabelecimento</ButtonOption>
                        </DivBoxBtnsOpts>
                        
                        <ButtonReset type="submit">Redefinir</ButtonReset>
                    </FormRecoverPassword>

                    <LinkLogin href="/login">Já possui Cadastro ? <strong>Faça seu login!</strong></LinkLogin>
                </SectionRecoverPassword>
            </Main>

            <FooterUser/>
        </>
    )
}

const RecoverPasswordPage = () => {
    const { user, token } = useParams();
    const { resetPasswordAdmin } = useContext(AdminContext)
    const { resetPasswordClient } = useContext(ClientContext)

    const { register, handleSubmit, formState: { errors } } = useForm<iNewPassword>({
        resolver: zodResolver(newPasswordSchema)
    })

    const submitNewPassword: SubmitHandler<iNewPassword> = (data: iNewPassword) => {
        const newData = {
            password: data.password
        }

        if(user === 'cliente' && token){
            resetPasswordClient(token, newData)
        }
        if(user === 'estabelecimento' && token){
            resetPasswordAdmin(token, newData)
        }
        if(user !== 'cliente' && user !== 'estabelecimento' || token == undefined) {
            toast.error('Ops, algo deu errado... Abra o seu email e tente novamente.', {
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
        <>
            <Main>
                <SectionRecoverPassword>
                    <FigureLogo>
                        <TitleLogo>BarPerks</TitleLogo>
                        <ImgLogo src={IconLogo} alt="icon-logo"/>
                    </FigureLogo>

                    <SpanYellow>Um e-mail foi enviado em sua conta para redefinição de sua senha.</SpanYellow>

                    <ParagraphCode>
                        Por favor, insira no campo abaixo o código de ativação que você recebeu por 
                        e-mail e redefina uma nova senha.
                    </ParagraphCode>

                    <FormRecoverPassword onSubmit={handleSubmit(submitNewPassword)}>
                        <InputRecover type="text" placeholder="Código" value={token ? token : ''}/>
                        <InputRecover type="password" placeholder="Nova senha" { ...register("password") }/>
                        { errors.password?.message ? <Span style={{fontSize: "var(--font-size-5)"}}>{errors.password.message}</Span> : null }

                        <InputRecover type="password" placeholder="Repita a nova senha" { ...register("passwordRepeated") }/>
                        { errors.passwordRepeated?.message ? <Span style={{fontSize: "var(--font-size-5)"}}>{errors.passwordRepeated.message}</Span> : null }

                        <ButtonReset>Redefinir</ButtonReset>
                    </FormRecoverPassword>
                </SectionRecoverPassword>
            </Main>

            <FooterUser/>
        </>
    )
}


export { 
    RecoverPasswordSendingEmailPage,
    RecoverPasswordPage
}