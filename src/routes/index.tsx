import { Route, Routes } from "react-router-dom"
import HomePage from "../pages/home"
import PlanosPage from "../pages/planos"
import SobrePage from "../pages/sobre"
import LoginPage from "../pages/login"
import InscricaoPage from "../pages/inscricao"
import InscricaoClientePage from "../pages/inscricao/cliente"
import InscricaoEstabelecimentoPage from "../pages/inscricao/estabelecimento"
import LoginClientePage from "../pages/login/cliente"
import LoginAdministradorPage from "../pages/login/administrador"
import { UserAdminEditPage, UserEditPage } from "../pages/user/userEdit/index"
import UserRegisterPoitingPage from "../pages/user/userRegisterPointing"
import UserRegisterProductPage from "../pages/user/userRegisterProduct"
import UserRegisterClientPage from "../pages/user/userRegisterClient"
import UserSearchClientPage from "../pages/user/userSearch"
import { RecoverPasswordPage, RecoverPasswordSendingEmailPage } from "../pages/recoverPassword"
import UserRewardHistoricPage from "../pages/user/userRewardHistoric"
import UserRedeemRewardPage from "../pages/user/userRedeemReward"
import TermsAndConditionsPage from "../pages/linksFast/termsConditions"
import PrivacyPolicyPage from "../pages/linksFast/privacyPolicy"

const RoutesMain = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/planos" element={<PlanosPage/>}/>
            <Route path="/sobre" element={<SobrePage/>}/>
            <Route path="/login" element={<LoginPage/>}/>
            <Route path="/inscricao" element={<InscricaoPage/>}/>
            <Route path="/inscricao-cliente" element={<InscricaoClientePage/>}/>
            <Route path="/inscricao-estabelecimento" element={<InscricaoEstabelecimentoPage/>}/>
            <Route path="/login-cliente" element={<LoginClientePage title="Login (Cliente)"/>}/>
            <Route path="/login-administrador" element={<LoginAdministradorPage title="Login (Administrador)"/>}/>
            <Route path="/admin" element={<UserAdminEditPage/>}/>
            <Route path="/admin/registro-pontuacao" element={<UserRegisterPoitingPage/>}/>
            <Route path="/admin/cadastrar-produtos" element={<UserRegisterProductPage/>}/>
            <Route path="/admin/cadastrar-cliente" element={<UserRegisterClientPage/>}/>
            <Route path="/admin/buscar-usuario" element={<UserSearchClientPage/>}/>
            <Route path="/recuperar-senha" element={<RecoverPasswordSendingEmailPage/>}/>
            <Route path="/recuperar-senha/codigo" element={<RecoverPasswordPage/>}/>
            <Route path="/usuario" element={<UserEditPage/>}/>
            <Route path="/usuario/historico-resgates" element={<UserRewardHistoricPage/>}/>
            <Route path="/usuario/resgatar-recompensas" element={<UserRedeemRewardPage/>}/>
            <Route path="/termos-e-condicoes" element={<TermsAndConditionsPage/>}/>
            <Route path="/politica-de-privacidade" element={<PrivacyPolicyPage/>}/>
        </Routes>
    )
}

export default RoutesMain