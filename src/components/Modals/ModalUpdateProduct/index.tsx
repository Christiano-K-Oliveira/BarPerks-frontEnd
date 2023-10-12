import { useCallback, useContext } from "react";
import { AdminContext } from "../../../contexts/administradorContext";
import { ButtonCloseModal, ButtonEdit, DivInput, DivTitle, FormEditProduct, Input, InputFile, Label, Modal, ModalBackground, SpanError, SubTitleModal, TitleEdit, TitleModal } from "./style";
import { AiFillCloseCircle } from "react-icons/ai";
import { useDropzone } from "react-dropzone";
import { SubmitHandler, useForm } from "react-hook-form";
import { iUpdateProduct } from "../../../interfaces/user/user.interface";
import { zodResolver } from "@hookform/resolvers/zod";
import { userRegisterUpdateProductSchema } from "../../../schemas/user.schema";

const ModalUpdateProduct = () => {
    const { setModalEditProduct, dropFile, setFile, updateProduct } = useContext(AdminContext);

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

    const { register, handleSubmit, formState: { errors } } = useForm<iUpdateProduct>({
        resolver: zodResolver(userRegisterUpdateProductSchema),
    });

    const submitProduct: SubmitHandler<iUpdateProduct> = (data: iUpdateProduct) => {
        updateProduct(data)
        setModalEditProduct(false)
    };
  
    function closeModal(element: React.MouseEvent<HTMLDivElement, MouseEvent>) {
      const target = element.target as HTMLDivElement;
  
      if (target.id === "modal-background-edit") {
        setModalEditProduct(false);
      }
    }
  
    return (
      <ModalBackground id="modal-background-edit" onClick={(element) => closeModal(element)}>
        <Modal>
            <DivTitle>
                <TitleModal>Produto</TitleModal>
                <ButtonCloseModal onClick={() => setModalEditProduct(false)}><AiFillCloseCircle size="32px" /></ButtonCloseModal>
            </DivTitle>

            <SubTitleModal>Editar Produto</SubTitleModal>

            <FormEditProduct onSubmit={handleSubmit(submitProduct)}>
                <TitleEdit>Informações Produto</TitleEdit>

                <DivInput>
                    <Label htmlFor="name">Nome</Label>
                    <Input id="name" placeholder="Nome do produto" { ...register("name") }/>
                    { errors.name?.message ? <SpanError>{errors.name.message}</SpanError> : null }
                </DivInput>

                <DivInput>
                    <Label htmlFor="code">Código</Label>
                    <Input id="code" placeholder="Código do produto" { ...register("code") }/>
                    { errors.code?.message ? <SpanError>{errors.code.message}</SpanError> : null }
                </DivInput>

                <DivInput>
                    <Label htmlFor="value">Valor</Label>
                    <Input id="value" placeholder="Valor do produto" { ...register("value") }/>
                    { errors.value?.message ? <SpanError>{errors.value.message}</SpanError> : null }
                </DivInput>

                <DivInput style={{marginTop: "10px"}} { ...getRootProps() }>
                    <Label htmlFor="photo">Foto do Produto</Label>
                    <InputFile id="photo" placeholder="Escolher arquivo" { ...getInputProps }/>
                    <span style={{display: 'flex', cursor: 'pointer'}}>{dropFile === null ? 'Nenhum arquivo selecionado...' : dropFile.name}</span>
                </DivInput>

                <ButtonEdit type="submit">Salvar alterações</ButtonEdit>
            </FormEditProduct>
        </Modal>
      </ModalBackground>
    );
};

export { ModalUpdateProduct }