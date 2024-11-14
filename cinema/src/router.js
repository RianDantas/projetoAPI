import {BrowserRouter, Routers, Router, Routes, Route} from  'react-router-dom';
import Home from './pages/Home';
import Detalhes from './pages/Detalhes';

function RouterApp(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />}></Route>
                <Route path='/detalhes' element={<Detalhes />}></Route>
            </Routes>
        </BrowserRouter>
    );
}

export default RouterApp;