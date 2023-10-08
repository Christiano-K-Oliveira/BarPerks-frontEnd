import { 
    LinkStart, 
    DivBox, 
    Figure, 
    ImageBeer, 
    Paragraph, 
    SectionStarting, 
    Title, 
    DivBoxIcons, 
    DivBoxIcon, 
    FigureIcon, 
    SpanIcon, FourArrowsIcon, BreakLine, PadlockIcon} from "./style"
import PhotoBeer from '../../assets/images/streamline-beer-mug.png'
import Padlock from '../../assets/images/cadeado-vector.svg'
import ArrowsIcon from '../../assets/images/4seta-vector.svg'

const SectionStart = () => {
    return (
        <SectionStarting>
            <DivBox>
                <Title>Aumente o sucesso do seu <BreakLine/> bar com nosso programa de pontos <BreakLine/> de fidelidade!</Title>
                <Paragraph>BarPerks oferece um jeito eficaz de <BreakLine/> gerenciar os pontos de fidelidade de seus clientes.</Paragraph>
                <LinkStart to={'/inscricao'}>Começar</LinkStart>

                <DivBoxIcons>
                    <DivBoxIcon>
                        <FigureIcon>
                            <PadlockIcon src={Padlock} alt={'cadeado-icon'}/>
                        </FigureIcon>
                        <SpanIcon>Velocidade <BreakLine/> e Segurança</SpanIcon>
                    </DivBoxIcon>

                    <DivBoxIcon>
                        <FigureIcon>
                            <FourArrowsIcon src={ArrowsIcon} alt={'4setas-icon'}/>
                        </FigureIcon>
                        <SpanIcon>Flexibilidade e agilidade</SpanIcon>
                    </DivBoxIcon>
                </DivBoxIcons>
            </DivBox>

            <Figure>
                <ImageBeer src={PhotoBeer} alt="photo-cerveja"/>
            </Figure>
        </SectionStarting>
    )
}

export default SectionStart