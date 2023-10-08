import { DivBox, LinkOption, SectionTwoOptions, Title } from "./style"

interface iOptions {
    title: string;
    optionOne: string;
    optionTwo: string;
    linkOne: string;
    linkTwo: string;
}

const SectionOptions = ({ title, optionOne, optionTwo, linkOne, linkTwo }: iOptions) => {
    return (
        <SectionTwoOptions>
            <Title>{title}</Title>

            <DivBox>
                <LinkOption to={linkOne} >{optionOne}</LinkOption>
                <LinkOption to={linkTwo}>{optionTwo}</LinkOption>
            </DivBox>
        </SectionTwoOptions>
    )
}

export default SectionOptions