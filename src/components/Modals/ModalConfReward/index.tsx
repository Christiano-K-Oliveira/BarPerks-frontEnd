import { useContext } from "react";
import { ButtonCloseModal, ButtonConf, ButtonExit, DivBtns, DivTitle, Modal, ModalBackground, Paragraph, TitleModal } from "./style"
import { ClientContext } from "../../../contexts/clienteContext";
import { AiFillCloseCircle } from "react-icons/ai";

const ModalConfReward = () => {
    const { setModalConfReward, createHistoryReward } = useContext(ClientContext)

    function closeModal(element: React.MouseEvent<HTMLDivElement, MouseEvent>) {
        const target = element.target as HTMLDivElement;
    
        if (target.id === "modal-background") {
          setModalConfReward(false);
        }
    }

    return (
        <ModalBackground id="modal-background" onClick={(element) => closeModal(element)}>
            <Modal>
                <DivTitle>
                    <TitleModal>Confirmar Resgate</TitleModal>
                    <ButtonCloseModal onClick={() => setModalConfReward(false)}><AiFillCloseCircle size="32px" /></ButtonCloseModal>
                </DivTitle>

                <Paragraph>Confirma a troca de seus pontos por este produto?</Paragraph>

                <DivBtns>
                    <ButtonExit onClick={() => setModalConfReward(false)}>Cancelar</ButtonExit>
                    <ButtonConf onClick={() => {
                        createHistoryReward()
                        setModalConfReward(false)
                    }}>Confirmar</ButtonConf>
                </DivBtns>
            </Modal>
        </ModalBackground>
    )
}

export default ModalConfReward