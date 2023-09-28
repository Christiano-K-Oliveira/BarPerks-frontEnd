import { DivBox, DivBoxMobile, DivIcons, FormStyle, IconImage, InputFile, LabelFile, LinkForgotPassword, Span, SpanLogin } from "./style"
import { iFormInscricao, iSectionFormInscricao } from "../../interfaces/inscricao/inscricao.interface";
import { InputForm, InputLogin } from "./Input";
import ButtonForm from "./Button";
import LinkLogin from "./LinkLogin";
import { SubmitHandler, useForm } from "react-hook-form";
import ReCAPTCHA from "react-google-recaptcha";
import { iFormLogin } from "../../interfaces/login/login.interface";
import { loginSchema } from "../../schemas/login.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import GoogleIcon from "../../assets/images/google-icon.png"
import FacebookIcon from "../../assets/images/facebook-logo-redondo.png"
import { useState } from "react";

const FormInscricao = ({
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
    photo,
    register,
    handleSubmit,
    errors
}: iSectionFormInscricao) => {

    const submitRegister: SubmitHandler<iFormInscricao> = (registerData: iFormInscricao) => {
        console.log(registerData)

        return;
    };

    const [ recaptcha, setRecaptcha ] = useState(false)

    return (
        <FormStyle onSubmit={handleSubmit(submitRegister)}>

            <InputForm id={name} type="text"  placeholder={name} register={register} name="name"/>
            { errors.name?.message ? <Span>{errors.name.message}</Span> : null }

            <InputForm id={socialNumber} type="text"  placeholder={socialNumber} register={register} name="socialNumber"/>
            { errors.socialNumber?.message ? <Span>{errors.socialNumber.message}</Span> : null }

            <InputForm id={email} type="email"  placeholder={email} register={register} name="email"/>
            { errors.email?.message ? <Span>{errors.email.message}</Span> : null }

            <InputForm id={password} type="password"  placeholder={password} register={register} name="password"/>
            { errors.password?.message ? <Span>{errors.password.message}</Span> : null }

            <InputForm id={passwordRepeated} type="password"  placeholder={passwordRepeated} register={register} name="passwordRepeated"/>
            { errors.passwordRepeated?.message ? <Span>{errors.passwordRepeated.message}</Span> : null }

            <InputForm id={phone} type="text"  placeholder={phone} register={register} name="phone"/>
            { errors.phone?.message ? <Span>{errors.phone.message}</Span> : null }

            <InputForm id={address} type="text"  placeholder={address} register={register} name="address"/>
            { errors.address?.message ? <Span>{errors.address.message}</Span> : null }

            <InputForm id={state} type="text"  placeholder={state} register={register} name="state"/>
            { errors.state?.message ? <Span>{errors.state.message}</Span> : null }

            <InputForm id={city} type="text"  placeholder={city} register={register} name="city"/>
            { errors.city?.message ? <Span>{errors.city.message}</Span> : null }

            <InputForm id={postalCode} type="text"  placeholder={postalCode} register={register} name="postalCode"/>
            { errors.postalCode?.message ? <Span>{errors.postalCode.message}</Span> : null }

            <LabelFile htmlFor="photo">Escolha sua Foto</LabelFile>
            <InputFile id="photo" type="file"  placeholder={photo} { ...register("photo") }/>
            { errors.photo?.message ? <Span>{errors.photo.message}</Span> : null }

        <DivBox>
            <ReCAPTCHA sitekey="6LdfDFMoAAAAAJsTZn7EjSNOVHHGASWulVDDq28i" size="normal" onChange={() => recaptcha ? setRecaptcha(false) : setRecaptcha(true)}/>
        </DivBox>

        <DivBoxMobile>
                <ReCAPTCHA sitekey="6LdfDFMoAAAAAJsTZn7EjSNOVHHGASWulVDDq28i" size="compact" onChange={() => recaptcha ? setRecaptcha(false) : setRecaptcha(true)}/>
        </DivBoxMobile>

            <ButtonForm name="Registre-se"/>
            <LinkLogin/>
        </FormStyle>
    )
}

const FormLogin = () => {
    const [ recaptcha, setRecaptcha ] = useState(false)

    const { register, handleSubmit, formState: { errors } } = useForm<iFormLogin>({
        resolver: zodResolver(loginSchema),
    });

    const submitLogin: SubmitHandler<iFormLogin> = (loginData: iFormLogin) => {
        alert("Recaptcha nãop assinado!")           
        console.log(loginData)

        return;
    };

    return (
        <FormStyle onSubmit={handleSubmit(submitLogin)}>
            <InputLogin id="email" type="email" placeholder="E-mail" register={register} name="email"/>
            { errors.email?.message ? <Span>{errors.email.message}</Span> : null }

            <InputLogin id="password" type="password" placeholder="Senha" register={register} name="password"/>
            { errors.password?.message ? <Span>{errors.password.message}</Span> : null }

            <LinkForgotPassword href="/recuperar-senha">Esqueceu a senha?</LinkForgotPassword>
            <DivBoxMobile>
                <ReCAPTCHA sitekey="6LdfDFMoAAAAAJsTZn7EjSNOVHHGASWulVDDq28i" size="compact" onChange={() => recaptcha ? setRecaptcha(false) : setRecaptcha(true)}/>
            </DivBoxMobile>

            <DivBox>
                <ReCAPTCHA sitekey="6LdfDFMoAAAAAJsTZn7EjSNOVHHGASWulVDDq28i" size="normal" onChange={() => recaptcha ? setRecaptcha(false) : setRecaptcha(true)}/>
            </DivBox>

            <ButtonForm name="Fazer Login"/>

            <SpanLogin>Ou faça seu login com:</SpanLogin>
            <DivIcons>
                <IconImage src={GoogleIcon} alt="icon-google"/>
                <IconImage src={FacebookIcon} alt="icon-facebook"/>
            </DivIcons>
        </FormStyle>
    )
}

export { FormInscricao, FormLogin }