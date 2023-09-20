import { 
    DivBoxText, 
    ItemListProgram, 
    ListPrograms, 
    ParagraphItemList, 
    ParagraphPrograms, 
    PhotoItemList, 
    SectionProgramsLoyalty, 
    TitleItemList, 
    TitlePrograms,
} from "./style"
import PhotoHandsLoyalty from "../../assets/images/fides-photo.svg"
import PhotoPeopleHappy from "../../assets/images/programa-de-fidelidade-photo.svg"
import PhotoClientLoyal from "../../assets/images/cliente-fidelizado-photo.svg"

const SectionPrograms = () => {
    return (
        <SectionProgramsLoyalty>
            <DivBoxText>
                <TitlePrograms>Programas de Fidelidade</TitlePrograms>

                <ParagraphPrograms>
                    Um programa de fidelidade é um sistema de recompensas oferecido por 
                    empresas para incentivar clientes a fazer compras repetidas.
                    <br/>
                    Os clientes acumulam pontos ou benefícios ao realizar compras e podem 
                    trocá-los por descontos, produtos gratuitos ou outras vantagens.
                    <br/>
                    Isso visa a fidelização do cliente e o estímulo a compras contínuas.
                </ParagraphPrograms>
            </DivBoxText>

            <ListPrograms>
                <ItemListProgram>
                    <TitleItemList>PROGRAMA DE FIDELIDADE RECOMPENSÁVEL</TitleItemList>
                    <PhotoItemList src={PhotoHandsLoyalty} alt={'photo-AcertoDeMãos'}/>

                    <ParagraphItemList>
                        Um programa de fidelidade recompensável é um sistema que recompensa 
                        os clientes por compras e comportamentos específicos, oferecendo 
                        benefícios tangíveis, como descontos, produtos gratuitos, ou 
                        experiências exclusivas, como forma de incentivá-los a continuar 
                        sendo fiéis à marca ou empresa. É uma estratégia para aumentar a 
                        satisfação do cliente e promover a fidelização.
                    </ParagraphItemList>
                </ItemListProgram>

                <ItemListProgram>
                    <TitleItemList>PROGRAMA DE FIDELIDADE POR LEALDADE</TitleItemList>
                    <PhotoItemList src={PhotoPeopleHappy} alt={'photo-Clientes'}/>

                    <ParagraphItemList>
                        Um programa de fidelidade por lealdade é uma estratégia que recompensa 
                        clientes com base em sua longa associação ou gastos contínuos com uma 
                        marca ou empresa. Ele reconhece e valoriza a fidelidade a longo prazo, 
                        oferecendo recompensas e benefícios exclusivos aos clientes mais fiéis, 
                        incentivando-os a permanecer leais à marca.
                    </ParagraphItemList>
                </ItemListProgram>

                <ItemListProgram>
                    <TitleItemList>PROGRAMA DE FIDELIDADE POR INDICAÇÃO</TitleItemList>
                    <PhotoItemList src={PhotoClientLoyal} alt={'photo-Clientes2'}/>

                    <ParagraphItemList>
                        Um programa de fidelidade por indicação é uma estratégia em que os 
                        clientes são recompensados por recomendar a marca ou empresa a outras 
                        pessoas. Ao fazer indicações bem-sucedidas, os clientes ganham 
                        benefícios, como descontos ou prêmios, incentivando-os a promover 
                        ativamente a marca e expandir sua base de clientes. É uma forma 
                        eficaz de aproveitar a rede de relacionamentos dos clientes para 
                        aumentar a fidelização e atrair novos consumidores.
                    </ParagraphItemList>
                </ItemListProgram>
            </ListPrograms>
        </SectionProgramsLoyalty>
    )
}

export default SectionPrograms