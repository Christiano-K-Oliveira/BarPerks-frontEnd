import { useForm } from "react-hook-form";
import Footer from "../../../components/Footer";
import Header from "../../../components/Header";
import { SectionInscricaoAdmin } from "../../../components/SectionInscricao";
import { Main } from "../style";
import { iFormInscricao } from "../../../interfaces/inscricao/inscricao.interface";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerEstablishmentSchema } from "../../../schemas/inscricao.schema";

const InscricaoEstabelecimentoPage = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<iFormInscricao>({
    resolver: zodResolver(registerEstablishmentSchema),
  });

  return (
    <>
      <Header />

      <Main>
        <SectionInscricaoAdmin
          title="Inscreva-se (Estabelecimento)"
          name="Nome do Bar"
          socialNumber="CPF/CNPJ"
          email="E-mail"
          password="Senha"
          passwordRepeated="Repita a senha"
          phone="Telefone"
          address="Endereço"
          state="Estado"
          city="Cidade"
          postalCode="Código postal(CEP)"
          register={register}
          handleSubmit={handleSubmit}
          errors={errors}
        />
      </Main>

      <Footer />
    </>
  );
};

export default InscricaoEstabelecimentoPage;