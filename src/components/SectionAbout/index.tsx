import { DivBox, ImageBar, ParagraphAbout, SectionAbouting, SubtitleAbout, TitleAbout } from "./style"
import PhotoDrinks from '../../assets/images/brinde-drinks.png'

const SectionAbout = () => {
    return (
        <SectionAbouting>
            <DivBox>
                <TitleAbout>Sobre</TitleAbout>
                <SubtitleAbout>Sempre em busca de inspiração</SubtitleAbout>

                <ParagraphAbout>
                    Bem-vindo(a) à nossa plataforma dedicada à celebração da amizade, da boa comida e da 
                    alegria dos bares! Aqui, cada visita é mais do que um simples encontro: é uma 
                    experiência que nasceu da paixão compartilhada de um grupo de amigos determinados a 
                    criar algo único e especial.
                </ParagraphAbout>

                <ParagraphAbout>
                    Tudo começou como um sonho entre amigos, compartilhando risadas e histórias 
                    enquanto apreciávamos as delícias de nossos bares favoritos. Foi nesses momentos que
                    percebemos o valor de cada encontro, a magia de cada refeição compartilhada e a
                    importância de manter viva a chama da amizade em meio à correria do dia a dia.
                </ParagraphAbout>
                
                <ParagraphAbout>
                    Movidos pela crença de que os bares não são apenas lugares para comer e beber, mas
                    sim refúgios onde memórias são forjadas e laços são estreitados, decidimos transformar 
                    nossa visão em realidade. Assim, este site de fidelização de clientes para bares nasceu,
                    impulsionado por nossa conexão única como amigos e nosso desejo de espalhar a
                    alegria que sentimos em cada encontro.
                </ParagraphAbout>

                <ParagraphAbout>
                    Nossa plataforma não é apenas uma ferramenta para recompensar sua lealdade, mas sim 
                    um portal para uma comunidade apaixonada por compartilhar momentos inesquecíveis. 
                    Cada recurso, oferta e experiência foi meticulosamente planejado para refletir a vibração
                    amistosa que nos uniu desde o início. Ao explorar as ofertas exclusivas e os eventos
                    emocionantes que proporcionamos, você está entrando em um mundo onde a amizade é o
                    fio condutor.
                </ParagraphAbout>

                <ParagraphAbout>
                    Nossa plataforma não é apenas uma ferramenta para recompensar sua lealdade, mas sim 
                    um portal para uma comunidade apaixonada por compartilhar momentos inesquecíveis. 
                    Cada recurso, oferta e experiência foi meticulosamente planejado para refletir a vibração
                    amistosa que nos uniu desde o início. Ao explorar as ofertas exclusivas e os eventos
                    emocionantes que proporcionamos, você está entrando em um mundo onde a amizade é o
                    fio condutor.
                </ParagraphAbout>

                <ParagraphAbout>
                    Ao fazer parte da nossa comunidade de clientes fiéis, você se torna parte do legado que 
                    construímos com paixão e cuidado. Cada clique, cada participação em eventos e cada 
                    aproveitamento de ofertas é uma celebração da amizade e do espírito de união que nos
                    inspirou a criar este espaço virtual.
                </ParagraphAbout>

                <ParagraphAbout>
                    Agradecemos por nos escolher como parte da sua jornada de fidelidade aos bares que
                    você ama. Juntos, estamos elevando a experiência dos bares a um novo patamar, onde a 
                    amizade é a base sólida que sustenta cada momento inesquecível.
                </ParagraphAbout>

            </DivBox>
            <ImageBar src={PhotoDrinks} alt={'photo-brindando-bebidas'}/>
        </SectionAbouting>
    )
}

export default SectionAbout