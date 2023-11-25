import { useContext } from "react";
import { AdminContext } from "../../../contexts/administradorContext";
import { ButtonCloseModal, ButtonEdit, DivInput, DivTitle, FormEditProduct, Input, Label, Modal, ModalBackground, SpanError, SubTitleModal, TitleEdit, TitleModal } from "./style";
import { AiFillCloseCircle } from "react-icons/ai";
import { userUpdateRegisterClientSchema } from "../../../schemas/user.schema";
import { iUpdateRegisterClient } from "../../../interfaces/user/user.interface";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const ModalUpdateRegisterClient = () => {
    const { setModalEditRegisterClient, updateRegisterClient } = useContext(AdminContext);

    const { register, handleSubmit, formState: { errors } } = useForm<iUpdateRegisterClient>({
        resolver: zodResolver(userUpdateRegisterClientSchema)
    })
    const submitProduct: SubmitHandler<iUpdateRegisterClient> = (data: iUpdateRegisterClient) => {
        updateRegisterClient(data)
        setModalEditRegisterClient(false)
    };
  
    function closeModal(element: React.MouseEvent<HTMLDivElement, MouseEvent>) {
      const target = element.target as HTMLDivElement;
  
      if (target.id === "modal-background-edit") {
        setModalEditRegisterClient(false);
      }
    }
  
    return (
      <ModalBackground id="modal-background-edit" onClick={(element) => closeModal(element)}>
        <Modal>
            <DivTitle>
                <TitleModal>Registro de Cliente</TitleModal>
                <ButtonCloseModal onClick={() => setModalEditRegisterClient(false)}><AiFillCloseCircle size="32px" /></ButtonCloseModal>
            </DivTitle>

            <SubTitleModal>Editar Registro</SubTitleModal>

            <FormEditProduct onSubmit={handleSubmit(submitProduct)}>
                <TitleEdit>Informações do Registro</TitleEdit>

                <DivInput>
                    <Label htmlFor="name">Nome</Label>
                    <Input id="name" placeholder="Nome do cliente" { ...register("name") }/>
                    { errors.name?.message ? <SpanError>{errors.name.message}</SpanError> : null }
                </DivInput>

                <DivInput>
                    <Label htmlFor="cpf">Cpf</Label>
                    <Input id="cpf" placeholder="Cpf do cliente" { ...register("cpf") }/>
                    { errors.cpf?.message ? <SpanError>{errors.cpf.message}</SpanError> : null }
                </DivInput>

                <DivInput>
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" placeholder="Email do cliente" { ...register("email") }/>
                    { errors.email?.message ? <SpanError>{errors.email.message}</SpanError> : null }
                </DivInput>

                <DivInput>
                    <Label htmlFor="phone">Telefone</Label>
                    <Input id="phone" placeholder="Telefone do cliente" { ...register("telephone") }/>
                    { errors.telephone?.message ? <SpanError>{errors.telephone.message}</SpanError> : null }
                </DivInput>

                <ButtonEdit type="submit">Salvar alterações</ButtonEdit>
            </FormEditProduct>
        </Modal>
      </ModalBackground>
    );
};

export { ModalUpdateRegisterClient }