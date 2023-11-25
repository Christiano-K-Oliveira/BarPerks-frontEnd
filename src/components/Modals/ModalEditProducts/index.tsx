import { useContext } from "react";
import {
  BtnExcludeProduct,
  BtnUpdateProduct,
  ButtonCloseModal,
  DivItemModal,
  DivTitle,
  ItemListModal,
  ListModal,
  Modal,
  ModalBackground,
  SubTitleModal,
  TitleModal,
  ImgProduct,
  DivBox,
} from "./style";
import { AdminContext } from "../../../contexts/administradorContext";
import { AiFillCloseCircle } from "react-icons/ai";

const ModalEditProducts = () => {
  const { setEditProductsModal, listProducts, excludeProduct, setModalEditProduct, setIdProduct } = useContext(AdminContext);

  function closeModal(element: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    const target = element.target as HTMLDivElement;

    if (target.id === "modal-background") {
      setEditProductsModal(false);
    }
  }

  function openOtherModal(id: number){
    setIdProduct(id)
    setModalEditProduct(true)
  }

  return (
      <ModalBackground id="modal-background"onClick={(element) => closeModal(element)}>
        <Modal>
          <DivTitle>
            <TitleModal>Editar Produtos</TitleModal>
            <ButtonCloseModal onClick={() => setEditProductsModal(false)}><AiFillCloseCircle size="32px" /></ButtonCloseModal>
          </DivTitle>

          <SubTitleModal>Meus Produtos</SubTitleModal>

          <ListModal>
            {
                listProducts.length > 0 ? listProducts.map((item, index) => {
                  return (
                    <ItemListModal key={index}>
                      <DivBox>
                        <ImgProduct src={item.photo_url} alt="img-product" />
                        <DivItemModal>Nome: <span>{item.name}</span></DivItemModal>
                        <DivItemModal>Código: <span>{item.code}</span></DivItemModal>
                        <DivItemModal>Valor: <span>{item.value}</span></DivItemModal>
                      </DivBox>

                      <DivBox>
                        <BtnUpdateProduct type="submit"onClick={() => openOtherModal(item.id)}>Editar Produto</BtnUpdateProduct>
                        <BtnExcludeProduct type="button" onClick={() => excludeProduct(item.id)}>Excluir Produto</BtnExcludeProduct>
                      </DivBox>
                    </ItemListModal>
                  );
                }): null
            }
          </ListModal>
        </Modal>
      </ModalBackground>
  );
};

export { ModalEditProducts };
