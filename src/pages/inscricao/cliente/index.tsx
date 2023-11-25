import { useForm } from "react-hook-form";
import Footer from "../../../components/Footer";
import Header from "../../../components/Header";
import { SectionInscricaoUser} from "../../../components/SectionInscricao";
import { Main } from "../style";
import { iFormInscricaoUser } from "../../../interfaces/inscricao/inscricao.interface";
import { registerClientSchema } from "../../../schemas/inscricao.schema";
import { zodResolver } from "@hookform/resolvers/zod";


const InscricaoClientePage = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<iFormInscricaoUser>({
    resolver: zodResolver(registerClientSchema),
  });

  return (
    <>
      <Header />

      <Main>
        <SectionInscricaoUser
          title="Inscreva-se (Cliente)"
          name="Nome"
          birthDate="Data de nascimento"
          socialNumber="CPF"
          email="E-mail"
          password="Senha"
          passwordRepeated="Repita a senha"
          phone="Telefone"
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
