import Footer from "../../../components/Footer";
import Header from "../../../components/Header";
import { DivBoxSubject, DivTitle, Main, Paragraph, SectionTerms } from "../style";

const TermsAndConditionsPage = () => {
  return (
    <>
      <Header />

      <Main>
        <SectionTerms>
            <DivTitle>
                <h2>Termos e condições BarPerks</h2>
            </DivTitle>

            <Paragraph>
                Os Termos e Condições são um conjunto de termos jurídicos definidos pelo proprietário de um site. 
                Eles estabelecem os termos e condições que regulam as atividades dos visitantes e o relacionamento entre os 
                visitantes e o proprietário do site. Os termos devem ser estabelecidos de acordo com as necessidades 
                específicas e a natureza de cada site. Por exemplo, um site que oferece produtos a clientes envolvendo 
                transações de comércio eletrônico precisa ter termos que sejam diferentes dos termos de um site que oferece 
                somente informações. Os termos dão ao proprietário do site a capacidade de se proteger em caso de uma 
                possível exposição jurídica.
            </Paragraph>

            <DivBoxSubject>
                <h3>1. Elegibilidade:</h3>
                <p>1.1. Para participar do Programa, você deve ter pelo menos 18 anos de idade.</p>
                <p>1.2. A adesão ao Programa cabe ao bar responsável.</p>
            </DivBoxSubject>

            <DivBoxSubject>
                <h3>2. Inscrição:</h3>
                <p>2.1. Para se inscrever no Programa, você deve fornecer informações precisas e completas durante o processo de inscrição.</p>
                <p>2.2. Você é responsável por manter suas informações de contato atualizadas.</p>
            </DivBoxSubject>

            <DivBoxSubject>
                <h3>3. Acúmulo de Pontos:</h3>
                <p>3.1. Ao participar do Programa, você pode acumular pontos com base em suas compras qualificadas nos Bares participantes. </p>
                <p>3.2. Os pontos acumulados não têm valor monetário e não podem ser transferidos para terceiros.</p>
            </DivBoxSubject>

            <DivBoxSubject>
                <h3>4. Resgate de Pontos: </h3>
                <p>4.1. Os pontos acumulados podem ser resgatados de acordo com o valor que o bar determinar.</p>
                <p>4.2. O Bar reserva o direito de alterar os valores de resgate a qualquer momento sem aviso prévio.</p>
            </DivBoxSubject>

            <DivBoxSubject>
                <h3>5. Uso Responsável:</h3>
                <p> 5.1. Você concorda em usar o Programa de forma responsável e de acordo com todas as leis e regulamentos aplicáveis. </p>
                <p>5.2. O Bar reserva o direito de rescindir sua participação no Programa se considerar que você está abusando do mesmo.</p>
            </DivBoxSubject>

            <DivBoxSubject>
                <h3>6. Privacidade: </h3>
                <p>6.1. O Bar coletará e utilizará suas informações pessoais de acordo com a nossa Política de Privacidade. </p>
                <p>6.2. Você concorda em receber comunicações relacionadas ao Programa, a menos que opte por não receber essas comunicações.</p>
            </DivBoxSubject>

            <DivBoxSubject>
                <h3>7. Alterações nos Termos: </h3>
                <p>7.1. O Bar reserva o direito de alterar estes Termos a qualquer momento. Quaisquer alterações entrarão em vigor imediatamente após a publicação. </p>
                <p>7.2. É sua responsabilidade verificar periodicamente os Termos para estar ciente de quaisquer alterações.</p>
            </DivBoxSubject>

            <DivBoxSubject>
                <h3>8. Encerramento do Programa: </h3>
                <p>8.1. O Bar reserva o direito de encerrar o Programa a qualquer momento, sem aviso prévio. </p>
                <p>8.2. Em caso de encerramento do Programa, todos os pontos acumulados que não tenham sido resgatados serão perdidos.</p>
            </DivBoxSubject>

            <DivBoxSubject>
                <h3>9. Lei Aplicável: </h3>
                <p>9.1. Estes Termos serão regidos pelas leis do [Estado/País] sem consideração de conflitos de leis.</p>
            </DivBoxSubject>

            <DivBoxSubject>
                <h3>10. Contato: </h3>
                <p>10.1. Para entrar em contato conosco em relação ao Programa ou a estes Termos, utilize as informações de contato fornecidas em nosso site.</p>
                <p>10.2. Ao participar do Programa, você reconhece que leu, entendeu e concordou com estes Termos. Se você não concordar com estes Termos, não participe do Programa.</p>
            </DivBoxSubject>

            <DivBoxSubject style={{flexDirection: "initial", marginBottom: "60px"}}>
                <h3>Data de vigência:</h3>
                <p>[2023]</p>
            </DivBoxSubject>
        </SectionTerms>
      </Main>

      <Footer />
    </>
  );
};

export default TermsAndConditionsPage;
