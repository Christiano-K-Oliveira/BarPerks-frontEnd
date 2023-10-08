import { DivBox, ParagraphSlogan, SectionSloganCompany, TitleSlogan } from "./style"

const SectionSlogan = () => {
    return (
        <SectionSloganCompany>
            <DivBox>
                <TitleSlogan>Com a empresa certa, grandes coisas acontecem</TitleSlogan>
                <ParagraphSlogan>
                    No MyPerks, sabemos que a noite perfeita envolve mais do que apenas 
                    uma bebida. 
                    É sobre criar memórias inesquecíveis, compartilhar risadas com amigos 
                    e descobrir novos lugares emocionantes. 
                    É por isso que estamos aqui para tornar a experiência de seus clientes 
                    ainda mais especiais.
                </ParagraphSlogan>
            </DivBox>
        </SectionSloganCompany>
    )
}

export default SectionSlogan