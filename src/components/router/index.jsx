import { Routes , Route } from "react-router-dom"
import Home from "../../pages/home"
function Router(){
    return(
        <Routes>
            <Route path="/" element={<Home/>}/>
            {/* <Route path="" element={}/>
            <Route path="" element={}/>
            <Route path="" element={}/>
            <Route path="" element={}/>
            <Route path="" element={}/>
            <Route path="" element={}/> */}

        </Routes>
    )
}

export default Router