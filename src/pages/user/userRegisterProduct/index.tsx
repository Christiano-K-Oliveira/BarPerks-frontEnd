import FooterUser from "../../../components/Footer/FooterUser";
import { HeaderUserAdmin } from "../../../components/Header/HeaderUser";
import { SectionRegisterProducts } from "../../../components/SectionsUser";
import { Main } from "../style";
import { ModalEditProducts } from "../../../components/Modals/ModalEditProducts/index";
import { useContext } from "react";
import { AdminContext } from "../../../contexts/administradorContext";
import { ModalUpdateProduct } from "../../../components/Modals/ModalUpdateProduct";

const UserRegisterProductPage = () => {
  const { editProductsModal, modalEditProduct } = useContext(AdminContext);

  return (
    <>
      <HeaderUserAdmin />

      <Main>
        <SectionRegisterProducts />
      </Main>

      { editProductsModal ? <ModalEditProducts /> : null }
      { modalEditProduct ? <ModalUpdateProduct/> : null }

      <FooterUser />
    </>
  );
};

export default UserRegisterProductPage;
