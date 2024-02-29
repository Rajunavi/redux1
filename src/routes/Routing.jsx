import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "../components/Dashboard";
import Home from "../components/Home";
import About from "../components/About";
import Product from "../components/Product";

function Router(){
    return (
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Dashboard/>}>
                <Route index={true} element={<Home/>} />
                <Route path="about" element={<About/>}/>
            </Route>
            <Route path="product" element={<Product/>}/>

           
        </Routes>
        </BrowserRouter>
    )
}

export default Router;
