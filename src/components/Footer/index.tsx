import { 
    DivBoxAllInfo, 
    DivBoxCopyright, 
    DivBoxInfo, 
    DivBoxInfoUnique, 
    DivBoxSection, 
    FooterDouble, 
    ImageIcon, 
    LinkIcon, 
    LinkInfo, 
    ParagraphInfo, 
    SectionInfo, 
    TitleCopyright, 
    TitleFooter,
    TitleInfo,
} from "./style"
import { FaRegCopyright } from 'react-icons/fa'
import IconLinkedin from '../../assets/images/icon-linkedin.svg'
import IconInstagram from '../../assets/images/icon-instagram.svg'

const Footer = () => {
    return (
        <FooterDouble>
            <SectionInfo>
                <DivBoxSection>
                    <TitleFooter>BarPerks</TitleFooter>

                    <DivBoxAllInfo>
                        <DivBoxInfo>
                            <DivBoxInfoUnique>
                                <TitleInfo>Endereço</TitleInfo>

                                <ParagraphInfo>
                                    São Paulo - SP
                                </ParagraphInfo>
                            </DivBoxInfoUnique>

                            <DivBoxInfoUnique>
                                <TitleInfo>Telefone</TitleInfo>

                                <ParagraphInfo>(11) 97080-3104</ParagraphInfo>
                            </DivBoxInfoUnique>

                            <DivBoxInfoUnique>
                                <TitleInfo>Email</TitleInfo>

                                <ParagraphInfo>barperks68@gmail.com</ParagraphInfo>
                            </DivBoxInfoUnique>
                        </DivBoxInfo>

                        <DivBoxInfo style={{justifyContent: 'flex-start'}}>
                            <TitleInfo style={{marginBottom: '5px'}}>Links rápidos</TitleInfo>

                            <LinkInfo href={'/termos-e-condicoes'}>Termos e condições</LinkInfo>
                            <LinkInfo href={'politica-de-privacidade'}>Política de privacidade</LinkInfo>
                        </DivBoxInfo>

                        <DivBoxInfo style={{justifyContent: 'flex-start', gap: '5px'}}>
                            <DivBoxInfoUnique style={{flexDirection: 'initial', gap: '5px', alignItems: 'center', marginBottom: '5px'}}>
                                <TitleInfo>Linkedin</TitleInfo>
                                <LinkIcon href={'http://www.linkedin.com/in/bar-perks-a00733294'} target="blank">
                                    <ImageIcon src={IconLinkedin} alt={'icon-likedin'}/>
                                </LinkIcon>
                            </DivBoxInfoUnique>

                            <DivBoxInfoUnique style={{flexDirection: 'initial', gap: '5px', alignItems: 'center'}}>
                                <TitleInfo>Instagram</TitleInfo>
                                <LinkIcon href={'https://www.instagram.com/barperks/'} target="blank">
                                    <ImageIcon src={IconInstagram} alt={'icon-instagram'}/>
                                </LinkIcon>
                            </DivBoxInfoUnique>
                        </DivBoxInfo>
                    </DivBoxAllInfo>
                </DivBoxSection>
            </SectionInfo>

            <DivBoxCopyright>
                <FaRegCopyright size={'20px'} color={'white'}/>
                <TitleCopyright>2023 por BarPerks.</TitleCopyright>
            </DivBoxCopyright>
        </FooterDouble>
    )
}

export default Footer
