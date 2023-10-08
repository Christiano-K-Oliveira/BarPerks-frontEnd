import { zodResolver } from "@hookform/resolvers/zod";
import { InputUser, InputUserRegisterClient, InputUserRegisterPoints, InputUserRegisterProduct, InputUserSearchClient } from "../Input"
import { DivBoxInput, DivBtns, Form, Label, Span, InputFile, DivInputsYellow } from "./style"
import { SubmitHandler, useForm } from "react-hook-form";
import { iFormRegisterClient, iFormSearchClient, iFormSearchPub, iFormUserEdit, iFormUserRegisterPoints, iRegisterProduct } from "../../../interfaces/user/user.interface";
import { userEditSchema, userRegisterClientSchema, userRegisterPointsSchema, userRegisterProductSchema, userSearchClientSchema, userSearchPubSchema } from "../../../schemas/user.schema";
import { ButtonUser, ButtonUserSmall } from "../Button";

const FormUserAdminEdit = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<iFormUserEdit>({
        resolver: zodResolver(userEditSchema),
    });

    const submitEditUser: SubmitHandler<iFormUserEdit> = (data: iFormUserEdit) => {
        alert("fslts")           
        console.log(data)

        return;
    };

    return (
        <Form onSubmit={handleSubmit(submitEditUser)}>
            <DivBoxInput>
                <Label htmlFor="nome">Nome:</Label>
                <InputUser id="nome" name="name" type="text" register={register}/>
                { errors.name?.message ? <Span>{errors.name.message}</Span> : null }
            </DivBoxInput>

            <DivBoxInput>
                <Label htmlFor="cpf">CPF/CNPJ:</Label>
                <InputUser id="cpf" name="cpf" type="text" register={register}/>
                { errors.cpf?.message ? <Span>{errors.cpf.message}</Span> : null }
            </DivBoxInput>

            <DivBoxInput>
                <Label htmlFor="mail">Email:</Label>
                <InputUser id="mail" name="email" type="email" register={register}/>
                { errors.email?.message ? <Span>{errors.email.message}</Span> : null }
            </DivBoxInput>

            <DivBoxInput>
                <Label htmlFor="pass">Senha:</Label>
                <InputUser id="pass" name="password" type="password" register={register}/>
                { errors.password?.message ? <Span>{errors.password.message}</Span> : null }
            </DivBoxInput>

            <DivBoxInput>
                <Label htmlFor="confPassword">Redigite a Senha:</Label>
                <InputUser id="confPassword" name="passwordRepeated" type="password" register={register}/>
                { errors.passwordRepeated?.message ? <Span>{errors.passwordRepeated.message}</Span> : null }
            </DivBoxInput>

            <DivBoxInput>
                <Label htmlFor="telephone">Telefone/Celular:</Label>
                <InputUser id="telephone" name="phone" type="text" register={register}/>
                { errors.phone?.message ? <Span>{errors.phone.message}</Span> : null }
            </DivBoxInput>

            <DivBoxInput>
                <Label htmlFor="photo">Foto:</Label>
                <InputFile id="photo" type="file" { ...register("photo") }/>
                { errors.photo?.message ? <Span>{errors.photo.message}</Span> : null }
            </DivBoxInput>

            <DivBtns>
                <ButtonUserSmall text="Remover Usuário" type="submit"/>
                <ButtonUserSmall text="Salvar" type="submit"/>
            </DivBtns>
        </Form>
    )
}

const FormUserRegisterPoints = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<iFormUserRegisterPoints>({
        resolver: zodResolver(userRegisterPointsSchema),
    });


    const submitRegisterPoints: SubmitHandler<iFormUserRegisterPoints> = (data: iFormUserRegisterPoints) => {
        alert("fslts")           
        console.log(data)

        return;
    };

    return (
        <Form onSubmit={handleSubmit(submitRegisterPoints)} style={{alignItems: "center", gap: "15px", marginTop: "20px"}}>
            <InputUserRegisterPoints id="socialNumber" name="cpf" type="text" register={register} placeholder="CPF do cliente"/>
            { errors.cpf?.message ? <Span style={{marginTop: "-15px"}}>{errors.cpf.message}</Span> : null }

            <InputUserRegisterPoints id="points" name="points" type="text" register={register} placeholder="Pontuação do usuário"/>
            { errors.points?.message ? <Span style={{marginTop: "-15px"}}>{errors.points.message}</Span> : null }

            <ButtonUser type="submit" text="Registrar Pontuação"/>
        </Form>
    )
}

const FormUserRegisterProducts = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<iRegisterProduct>({
        resolver: zodResolver(userRegisterProductSchema),
    });


    const submitProduct: SubmitHandler<iRegisterProduct> = (data: iRegisterProduct) => {
        alert("fslts")           
        console.log(data)

        return;
    };
    
    return (
        <Form onSubmit={handleSubmit(submitProduct)} style={{alignItems: "center", gap: "15px"}}>
            <InputUserRegisterProduct name="name" type="text" register={register} placeholder="Nome do Produto"/>
            { errors.name?.message ? <Span style={{marginTop: "-15px"}}>{errors.name.message}</Span> : null }

            <InputUserRegisterProduct name="code" type="text" register={register} placeholder="Código do Produto"/>
            { errors.code?.message ? <Span style={{marginTop: "-15px"}}>{errors.code.message}</Span> : null }

            <InputUserRegisterProduct name="points" type="text" register={register} placeholder="Pontos Necessários"/>
            { errors.points?.message ? <Span style={{marginTop: "-15px"}}>{errors.points.message}</Span> : null }

            <ButtonUser type="submit" text="Registrar Produto" margin="30px"/>
            <ButtonUser type="submit" text="Editar Produtos" margin="0px"/>

        </Form>
    )
}

const FormUserRegisterClient = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<iFormRegisterClient>({
        resolver: zodResolver(userRegisterClientSchema),
    });


    const submitClient: SubmitHandler<iFormRegisterClient> = (data: iFormRegisterClient) => {
        alert("fslts")           
        console.log(data)

        return;
    };

    return (
        <Form style={{alignItems: "center", gap: "15px"}} onSubmit={handleSubmit(submitClient)}>
            <InputUserRegisterClient name="name" type="text" register={register} placeholder="Nome"/>
            { errors.name?.message ? <Span style={{marginTop: "-15px"}}>{errors.name.message}</Span> : null }

            <InputUserRegisterClient name="cpf" type="text" register={register} placeholder="CPF"/>
            { errors.cpf?.message ? <Span style={{marginTop: "-15px"}}>{errors.cpf.message}</Span> : null }

            <InputUserRegisterClient name="email" type="email" register={register} placeholder="E-mail"/>
            { errors.email?.message ? <Span style={{marginTop: "-15px"}}>{errors.email.message}</Span> : null }

            <InputUserRegisterClient name="phone" type="text" register={register} placeholder="Telefone/Celular"/>
            { errors.phone?.message ? <Span style={{marginTop: "-15px"}}>{errors.phone.message}</Span> : null }

            <ButtonUser type="submit" text="Cadastrar" margin="30px"/>
        </Form>
    )
}

const FormUserSearchClient = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<iFormSearchClient>({
        resolver: zodResolver(userSearchClientSchema),
    });


    const submitSearchClient: SubmitHandler<iFormSearchClient> = (data: iFormSearchClient) => {
        alert("fslts")           
        console.log(data)

        return;
    };

    return (
        <Form style={{alignItems: "center", gap: "15px"}} onSubmit={handleSubmit(submitSearchClient)}>
            <InputUserSearchClient name="name" type="text" register={register} placeholder="Nome"/>
            { errors.name?.message ? <Span style={{marginTop: "-15px"}}>{errors.name.message}</Span> : null }

            <InputUserSearchClient name="cpf" type="text" register={register} placeholder="CPF"/>
            { errors.cpf?.message ? <Span style={{marginTop: "-15px"}}>{errors.cpf.message}</Span> : null }

            <ButtonUser type="submit" text="Buscar" margin="20px"/>
            <ButtonUser type="submit" text="Lista Completa" margin="0px"/>
        </Form>
    )
}

const FormUserEdit = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<iFormUserEdit>({
        resolver: zodResolver(userEditSchema),
    });

    const submitEditUser: SubmitHandler<iFormUserEdit> = (data: iFormUserEdit) => {
        alert("fslts")           
        console.log(data)

        return;
    };

    return (
        <Form onSubmit={handleSubmit(submitEditUser)}>
            <DivBoxInput>
                <Label htmlFor="nome">Nome:</Label>
                <InputUser id="nome" name="name" type="text" register={register}/>
                { errors.name?.message ? <Span>{errors.name.message}</Span> : null }
            </DivBoxInput>

            <DivBoxInput>
                <Label htmlFor="cpf">CPF:</Label>
                <InputUser id="cpf" name="cpf" type="text" register={register}/>
                { errors.cpf?.message ? <Span>{errors.cpf.message}</Span> : null }
            </DivBoxInput>

            <DivBoxInput>
                <Label htmlFor="mail">Email:</Label>
                <InputUser id="mail" name="email" type="email" register={register}/>
                { errors.email?.message ? <Span>{errors.email.message}</Span> : null }
            </DivBoxInput>

            <DivBoxInput>
                <Label htmlFor="pass">Senha:</Label>
                <InputUser id="pass" name="password" type="password" register={register}/>
                { errors.password?.message ? <Span>{errors.password.message}</Span> : null }
            </DivBoxInput>

            <DivBoxInput>
                <Label htmlFor="confPassword">Redigite a Senha:</Label>
                <InputUser id="confPassword" name="passwordRepeated" type="password" register={register}/>
                { errors.passwordRepeated?.message ? <Span>{errors.passwordRepeated.message}</Span> : null }
            </DivBoxInput>

            <DivBoxInput>
                <Label htmlFor="telephone">Telefone/Celular:</Label>
                <InputUser id="telephone" name="phone" type="text" register={register}/>
                { errors.phone?.message ? <Span>{errors.phone.message}</Span> : null }
            </DivBoxInput>

            <DivBoxInput>
                <Label htmlFor="photo">Foto:</Label>
                <InputFile id="photo" type="file" { ...register("photo") }/>
                { errors.photo?.message ? <Span>{errors.photo.message}</Span> : null }
            </DivBoxInput>

            <DivBtns style={{marginTop: "10px"}}>
                <ButtonUserSmall text="Salvar" type="submit"/>
            </DivBtns>
        </Form>
    )
}

const FormSearchPub = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<iFormSearchPub>({
        resolver: zodResolver(userSearchPubSchema),
    });

    const submitSearchPub: SubmitHandler<iFormSearchPub> = (data: iFormSearchPub) => {
        alert("fslts")           
        console.log(data)

        return;
    };

    return (
        <Form onSubmit={handleSubmit(submitSearchPub)}>
            <DivInputsYellow>
                <input type="text" placeholder="Nome do Bar" { ...register("name") }/>
                { errors.name?.message ? <Span>{errors.name.message}</Span> : null }

                <input type="text" placeholder="CPF/CNPJ" { ...register("socialNumber") }/>
                { errors.socialNumber?.message ? <Span>{errors.socialNumber.message}</Span> : null }

                <button type="submit">Buscar</button>
            </DivInputsYellow>
        </Form>
    )
}

export { 
    FormUserAdminEdit, 
    FormUserRegisterPoints, 
    FormUserRegisterProducts,
    FormUserRegisterClient,
    FormUserSearchClient,
    FormUserEdit,
    FormSearchPub
}