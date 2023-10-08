import { iSectionFormInscricao } from "../../interfaces/inscricao/inscricao.interface";
import { FormInscricao } from "../Forms";
import TitleForm from "../Forms/Title";
import { SectionFormInscricao } from './style'

const SectionInscricao = ({
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
  photo,
  register,
  handleSubmit,
  errors
}: iSectionFormInscricao) => {
  return (
    <SectionFormInscricao>
      <TitleForm title={title}/>

      <FormInscricao
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
        photo={photo}
        register={register}
        handleSubmit={handleSubmit}
        errors={errors}
        
      />
    </SectionFormInscricao>
  );
};


export default SectionInscricao;
