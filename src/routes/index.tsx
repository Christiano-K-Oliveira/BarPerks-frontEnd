import { Route, Routes } from 'react-router-dom'
import HomePage from '../pages/home'
import PlanosPage from '../pages/planos'
import SobrePage from '../pages/sobre'
import LoginPage from '../pages/login'
import InscricaoPage from '../pages/inscricao'

const RoutesMain = () => {
    return (
        <Routes>
            <Route path='/' element={<HomePage/>}/>
            <Route path='/planos' element={<PlanosPage/>}/>
            <Route path='/sobre' element={<SobrePage/>}/>
            <Route path='/login' element={<LoginPage/>}/>
            <Route path='/inscricao' element={<InscricaoPage/>}/>
        </Routes>
    )
}

export default RoutesMain