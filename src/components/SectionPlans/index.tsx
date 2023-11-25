import { DivBoxBlack, DivPrice, ItemPlan, ListPlans, SectionAllPlans, SpanBestCost, SpanLight, SpanNumberPrice, SpanSignPrice, TitlePlan, TitlePlans } from "./style"

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
                    

                    <SpanLight style={{width: '100%', marginTop: "40px"}}>- Até 500 clientes</SpanLight>
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
                        

                    </DivBoxBlack>

                    <SpanLight style={{padding: '0px 40px', marginTop: "30px"}}>- Clientes ilimitados</SpanLight>
                    <SpanLight style={{padding: '0px 40px'}}>- Suporte prioritário</SpanLight>
                    <SpanLight style={{padding: '0px 40px'}}>- Válido por 12 meses</SpanLight>
                </ItemPlan>
            </ListPlans>
        </SectionAllPlans>
    )
}

export default SectionPlans
