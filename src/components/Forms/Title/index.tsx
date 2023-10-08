import { TitleForms } from "./style";

interface iTitle {
    title: string;
}

const TitleForm = ({title}: iTitle) => {
    return (
        <TitleForms>{title}</TitleForms>
    )
}

export default TitleForm