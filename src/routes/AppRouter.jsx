import Home from '../pages/Home.jsx'
import Login from '../pages/Login.jsx'
import Registrar from '../pages/Registrar.jsx'
import {Routes, Route} from 'react-router-dom'

function AppRouter(){
    return(
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Registrar" element={<Registrar />} />
        </Routes>
    )
}

export default AppRouter