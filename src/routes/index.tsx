import { Route, Routes } from 'react-router-dom'
import HomePage from '../pages/home'
import PlanosPage from '../pages/planos'
import SobrePage from '../pages/sobre'

const RoutesMain = () => {
    return (
        <Routes>
            <Route path='/' element={<HomePage/>}/>
            <Route path='/planos' element={<PlanosPage/>}/>
            <Route path='/sobre' element={<SobrePage/>}/>
        </Routes>
    )
}

export default RoutesMain