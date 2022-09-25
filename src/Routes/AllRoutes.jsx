import {Route,Routes} from "react-router-dom";
import Products from "./Dashboard";
import Home from "./Home";

function ALL(){
    return (
        <Routes>
            <Route path ="/" element={<Home/>}></Route>
            <Route path="/dashboard" element={<Products/>}></Route>
        </Routes>
    )
}
export default ALL