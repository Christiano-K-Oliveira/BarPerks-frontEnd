import { useContext } from "react";
import { AdminContext } from "../../../contexts/administradorContext";
import { ButtonCloseModal, ButtonRescue, DivInput, DivTitle, FormEditProduct, Input, Label, ListRewards, Modal, ModalBackground, SpanError, TitleModal } from "./style";
import { AiFillCloseCircle } from "react-icons/ai";
import { userSearchReward } from "../../../schemas/user.schema";
import { iSearchReward } from "../../../interfaces/user/user.interface";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const ModalRescueRewards = () => {
    const { setModalRescueRewards, listRewardsClient, getRescueHistory } = useContext(AdminContext);

    const { register, handleSubmit, formState: { errors } } = useForm<iSearchReward>({
        resolver: zodResolver(userSearchReward)
    })
    const submitProduct: SubmitHandler<iSearchReward> = (data: iSearchReward) => {
        getRescueHistory(data)
    };
  
    function closeModal(element: React.MouseEvent<HTMLDivElement, MouseEvent>) {
      const target = element.target as HTMLDivElement;
  
      if (target.id === "modal-background-edit") {
        setModalRescueRewards(false);
      }
    }
  
    return (
      <ModalBackground id="modal-background-edit" onClick={(element) => closeModal(element)}>
        <Modal>
            <DivTitle>
                <TitleModal>Resgate de Recompensa</TitleModal>
                <ButtonCloseModal onClick={() => setModalRescueRewards(false)}><AiFillCloseCircle size="32px" /></ButtonCloseModal>
            </DivTitle>

            <FormEditProduct onSubmit={handleSubmit(submitProduct)}>
                <DivInput>
                    <Label htmlFor="name">Código de Resgate</Label>
                    <Input id="name" placeholder="Infome o código" { ...register("code_rescue") }/>
                    { errors.code_rescue?.message ? <SpanError>{errors.code_rescue.message}</SpanError> : null }
                </DivInput>

                <ButtonRescue type="submit">Resgatar</ButtonRescue>

                <ListRewards>
                  <h2>Lista de Recompensas</h2>

                  <div>
                    {
                      listRewardsClient.length > 0 ? listRewardsClient.map((item, index) => {
                        return (
                          <li key={index}>
                            <span>{item.reward_name}</span>
                            <span>{item.rescue_date}</span>
                          </li>
                        )
                      })
                      : <p>Sem Recompensas</p>
                    }
                  </div>
                </ListRewards>
            </FormEditProduct>
        </Modal>
      </ModalBackground>
    );
};

export { ModalRescueRewards }