import React from "react";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import App from "./App";
import RegistrationForm from './pages/Registor'
 import Login from "./pages/login";

function Routing(){
    return(<>
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<App/>}></Route>
        <Route path='/Login' element={<Login/>}/>
        <Route path="/Registor" element={<RegistrationForm/>}/>
    </Routes>
    </BrowserRouter>
    </>)
}
export default Routing;