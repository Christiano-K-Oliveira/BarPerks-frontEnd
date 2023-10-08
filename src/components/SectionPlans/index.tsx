import { DivBoxBlack, DivPrice, ItemPlan, LinkStartBlack, LinkStartWhite, ListPlans, SectionAllPlans, SpanBestCost, SpanLight, SpanNumberPrice, SpanSignPrice, TitlePlan, TitlePlans } from "./style"

const SectionPlans = () => {
    return (
        <SectionAllPlans>
            <TitlePlans>Explore nossos planos</TitlePlans>

            <ListPlans>
                <ItemPlan>
                    <TitlePlan>Padrão</TitlePlan>

                    <DivPrice>
                        <SpanSignPrice>R$</SpanSignPrice>
                        <SpanNumberPrice>30</SpanNumberPrice>
                    </DivPrice>

                    <SpanLight>Todo mês</SpanLight>
                    <SpanLight>Válido por 6 meses</SpanLight>

                    <LinkStartBlack href="/inscricao">Começar</LinkStartBlack>

                    <SpanLight>- Benefício 1</SpanLight>
                    <SpanLight>- Benefício 2</SpanLight>
                </ItemPlan>

                <ItemPlan style={{padding: '0px'}}>
                    <DivBoxBlack>
                        <SpanBestCost>Melhor custo-benefício</SpanBestCost>
                        <TitlePlan style={{color: 'white'}}>Premium</TitlePlan>

                        <DivPrice>
                            <SpanSignPrice style={{color: 'white'}}>R$</SpanSignPrice>
                            <SpanNumberPrice style={{color: 'white'}}>50</SpanNumberPrice>
                        </DivPrice>

                        <SpanLight style={{color: 'white'}}>Todo mês</SpanLight>
                        <SpanLight style={{color: 'white'}}>Válido por 6 meses</SpanLight>

                    </DivBoxBlack>

                    <LinkStartWhite href="/inscricao">Começar</LinkStartWhite>

                    <SpanLight style={{padding: '0px 40px'}}>- Benefício 1</SpanLight>
                    <SpanLight style={{padding: '0px 40px'}}>- Benefício 2</SpanLight>
                    <SpanLight style={{padding: '0px 40px'}}>- Benefício 3</SpanLight>
                </ItemPlan>
            </ListPlans>
        </SectionAllPlans>
    )
}

export default SectionPlans