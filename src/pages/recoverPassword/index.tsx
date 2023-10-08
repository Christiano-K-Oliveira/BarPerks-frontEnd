import FooterUser from "../../components/Footer/FooterUser"
import { ButtonReset, FigureLogo, ImgLogo, InputRecover, LinkLogin, Main, Paragraph, ParagraphCode, SectionRecoverPassword, SpanReset, SpanYellow, TitleLogo, TitleRecover } from "./style"
import IconLogo from "../../assets/images/icon-barperks.svg"

const RecoverPasswordSendingEmailPage = () => {
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

                    <InputRecover type="email" placeholder="E-mail"/>
                    <ButtonReset>Redefinir</ButtonReset>
                    <LinkLogin href="/login">Já possui Cadastro ? <strong>Faça seu login!</strong></LinkLogin>
                </SectionRecoverPassword>
            </Main>

            <FooterUser/>
        </>
    )
}

const RecoverPasswordPage = () => {
    return (
        <>
            <Main>
                <SectionRecoverPassword>
                    <FigureLogo>
                        <TitleLogo>BarPerks</TitleLogo>
                        <ImgLogo src={IconLogo} alt="icon-logo"/>
                    </FigureLogo>

                    <SpanYellow>Um e-mail foi enviado para xxxxxxxxxxxx para redefinição de sua senha.</SpanYellow>

                    <ParagraphCode>
                        Por favor, insira no campo abaixo o código de ativação que você recebeu por 
                        e-mail e redefina uma nova senha.
                    </ParagraphCode>

                    <InputRecover type="text" placeholder="Código"/>
                    <InputRecover type="password" placeholder="Nova senha"/>
                    <InputRecover type="password" placeholder="Repita a nova senha"/>

                    <ButtonReset>Redefinir</ButtonReset>
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