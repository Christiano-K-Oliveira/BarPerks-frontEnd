import { iSectionFormInscricao, iSectionFormInscricaoUser } from "../../interfaces/inscricao/inscricao.interface";
import { FormInscricaoAdmin, FormInscricaoUser } from "../Forms";
import TitleForm from "../Forms/Title";
import { SectionFormInscricao } from './style'

const SectionInscricaoAdmin = ({
  title,
  name,
  socialNumber,
  email,
  password,
  passwordRepeated,
  phone,
  address,
  state,
  city,
  postalCode,
  register,
  handleSubmit,
  errors
}: iSectionFormInscricao) => {
  return (
    <SectionFormInscricao>
      <TitleForm title={title}/>

      <FormInscricaoAdmin
        title=""
        name={name} 
        socialNumber={socialNumber}
        email={email}
        password={password} 
        passwordRepeated={passwordRepeated}
        phone={phone}
        address={address}
        state={state}
        city={city}
        postalCode={postalCode}
        register={register}
        handleSubmit={handleSubmit}
        errors={errors}
      />
    </SectionFormInscricao>
  );
};


const SectionInscricaoUser = ({
  title,
  name,
  birthDate,
  socialNumber,
  email,
  password,
  passwordRepeated,
  phone,
  register,
  handleSubmit,
  errors
}: iSectionFormInscricaoUser) =>{
  return (
    <SectionFormInscricao>
      <TitleForm title={title}/>

      <FormInscricaoUser
        title=""
        name={name}
        birthDate={birthDate}
        socialNumber={socialNumber}
        email={email}
        password={password} 
        passwordRepeated={passwordRepeated}
        phone={phone}
        register={register}
        handleSubmit={handleSubmit}
        errors={errors}
      />
    </SectionFormInscricao>
  )
}

export { SectionInscricaoAdmin, SectionInscricaoUser }
