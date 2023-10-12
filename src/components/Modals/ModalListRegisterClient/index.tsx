import { AiFillCloseCircle } from "react-icons/ai"
import { ButtonCloseModal, DivTitle, ListModal, Modal, ModalBackground, SubTitleModal, TitleModal } from "./style"
import { useContext } from "react";
import { AdminContext } from "../../../contexts/administradorContext";
import CardUser from "../../SectionsUser/CardUser";

const ModalListRegisterClient = () => {
    const { setModalListRegisterClient, listRegisterClient } = useContext(AdminContext)

    function closeModal(element: React.MouseEvent<HTMLDivElement, MouseEvent>) {
        const target = element.target as HTMLDivElement;
    
        if (target.id === "modal-background") {
          setModalListRegisterClient(false);
        }
    }

    return (
        <ModalBackground id="modal-background" onClick={(element) => closeModal(element)}>
            <Modal>
                <DivTitle>
                    <TitleModal>Registro de Clientes</TitleModal>
                    <ButtonCloseModal onClick={() => setModalListRegisterClient(false)} ><AiFillCloseCircle size="32px" /></ButtonCloseModal>
                </DivTitle>

                <SubTitleModal>Lista Completa</SubTitleModal>

                <ListModal>
                    {
                        listRegisterClient.length > 0 ?
                        listRegisterClient.map((item, index) => {
                            return (
                                <CardUser id={item.id} name={item.name} cpf={item.cpf} email={item.email} telephone={item.telephone} photo_url={item.client.photo_url} key={index}/>
                            )
                        })
                        : null
                    }
                </ListModal>
            </Modal>
        </ModalBackground>
    )
}

export { ModalListRegisterClient }