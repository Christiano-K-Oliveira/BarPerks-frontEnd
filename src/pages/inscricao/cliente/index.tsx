import { useForm } from "react-hook-form";
import Footer from "../../../components/Footer";
import Header from "../../../components/Header";
import SectionInscricao from "../../../components/SectionInscricao";
import { Main } from "../style";
import { iFormInscricao } from "../../../interfaces/inscricao/inscricao.interface";
import { registerClientSchema } from "../../../schemas/inscricao.schema";
import { zodResolver } from "@hookform/resolvers/zod";


const InscricaoClientePage = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<iFormInscricao>({
    resolver: zodResolver(registerClientSchema),
  });

  return (
    <>
      <Header />

      <Main>
        <SectionInscricao
          title="Inscreva-se (Cliente)"
          name="Nome"
          socialNumber="CPF"
          email="E-mail"
          password="Senha"
          passwordRepeated="Repita a senha"
          phone="Telefone"
          address="Endereço"
          state="Estado"
          city="Cidade"
          postalCode="Código postal(CEP)"
          photo="Foto"
          register={register}
          handleSubmit={handleSubmit}
          errors={errors}
        />
      </Main>

      <Footer />
    </>
  );
};

export default InscricaoClientePage;
