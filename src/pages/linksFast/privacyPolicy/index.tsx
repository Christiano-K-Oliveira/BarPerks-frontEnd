import Footer from "../../../components/Footer"
import Header from "../../../components/Header"
import { DivBoxSubject, DivTitle, List, Main, Paragraph, SectionTerms } from "../style"

const PrivacyPolicyPage = () => {
    return (
        <>
            <Header/>

            <Main>
              <SectionTerms>
                  <DivTitle>
                      <h2>Política de privacidade</h2>
                  </DivTitle>

                  <Paragraph>
                      Uma política de privacidade é uma declaração que comunica algumas ou todas 
                      as formas como um site coleta, usa, divulga e administra os dados de seus
                      visitantes e clientes. Ela cumpre a exigência legal de proteção à privacidade do 
                      visitante ou cliente.
                  </Paragraph>

                  <Paragraph>
                      Cada país tem suas próprias leis, com requisitos que variam segundo a jurisdição
                      em relação ao uso de políticas de privacidade. Certifique-se de cumprir a 
                      legislação relevante para suas atividades e localização.
                  </Paragraph>

                  <Paragraph>
                      Esta Política de Privacidade descreve como a BarPerks coleta, usa e protege as informações pessoais dos participantes do programa de fidelidade ("Programa"). Ao participar do Programa, você concorda com os termos desta Política de Privacidade.
                      Informações Coletadas: Coletamos as seguintes informações pessoais quando você se inscreve no Programa:
                  </Paragraph>

                  <List>
                      <li>Nome</li>
                      <li>Endereço de e-mail</li>
                      <li>Data de Nascimento (para verificação de elegibilidade)</li>
                      <li>Número de telefone(opcional)</li>
                      <li>Outras informações</li>
                  </List>

                  <Paragraph>
                      Uso das Informações: Utilizamos as informações pessoais que coletamos para os seguintes fins:
                  </Paragraph>

                  <List>
                      <li>Gerenciar sua participação no Programa e acumular pontos de fidelidade.</li>
                      <li>Enviar comunicações relacionadas ao Programa, incluindo ofertas especiais e atualizações.</li>
                      <li>Melhorar nossos produtos e serviços com base no seu feedback e histórico de compras.</li>
                      <li>Cumprir obrigações legais e regulatórias.</li>
                  </List>

                  <DivBoxSubject>
                    <h3>Compartilhamento de Informações:</h3>
                    <p>Não compartilhamos suas informações pessoais com terceiros, exceto quando necessário para cumprir obrigações legais ou regulatórias.</p>
                  </DivBoxSubject>

                  <DivBoxSubject>
                    <h3>Segurança de Dados:</h3>
                    <p>Implementamos medidas de segurança para proteger suas informações pessoais contra acesso não autorizado, uso indevido ou divulgação.</p>
                  </DivBoxSubject>

                  <DivBoxSubject>
                    <h3>Cookies:</h3>
                    <p>Utilizamos cookies para melhorar a experiência do usuário em nosso site. Você pode configurar seu navegador para recusar cookies, mas isso pode afetar a funcionalidade do site.</p>
                  </DivBoxSubject>

                  <DivBoxSubject>
                    <h3>Acesso e Atualização de Informações:</h3>
                    <p>Você tem o direito de acessar suas informações pessoais e atualizá-las a qualquer momento. </p>
                  </DivBoxSubject>

                  <DivBoxSubject>
                    <h3>Menores de Idade:</h3>
                    <p>O Programa destina-se apenas a pessoas com 18 anos de idade ou mais. Não coletamos intencionalmente informações pessoais de menores de idade.</p>
                  </DivBoxSubject>

                  <DivBoxSubject>
                    <h3>Alterações na Política de Privacidade:</h3>
                    <p>Reservamo-nos o direito de alterar esta Política de Privacidade a qualquer momento. Quaisquer alterações entrarão em vigor imediatamente após a publicação em nosso site.</p>
                  </DivBoxSubject>

                  <DivBoxSubject>
                    <h3>Contato</h3>
                    <p>Se tiver dúvidas ou preocupações sobre esta Política de Privacidade ou desejar exercer seus direitos de privacidade, entre em contato conosco através dos detalhes fornecidos abaixo no layout.</p>
                  </DivBoxSubject>

                  <DivBoxSubject style={{flexDirection: "initial", marginBottom: "60px"}}>
                    <h3>Data de vigência:</h3>
                    <p>[2023]</p>
                  </DivBoxSubject>
              </SectionTerms>
            </Main>

            <Footer/>
        </>
    )
}

export default PrivacyPolicyPage