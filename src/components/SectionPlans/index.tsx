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

                    <SpanLight style={{width: '100%'}}>- Até 500 clientes mensais</SpanLight>
                    <SpanLight style={{width: '100%'}}>- Válido por 6 meses</SpanLight>
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

                    <SpanLight style={{padding: '0px 40px'}}>- Clientes ilimitados</SpanLight>
                    <SpanLight style={{padding: '0px 40px'}}>- Suporte prioritário</SpanLight>
                    <SpanLight style={{padding: '0px 40px'}}>- Válido por 12 meses</SpanLight>
                </ItemPlan>
            </ListPlans>
        </SectionAllPlans>
    )
}

export default SectionPlans