import { Routes , Route } from "react-router-dom"
import Home from "../../pages/home"
import Video from "../../pages/video"
import Serial from "../../pages/serial"
import PopularMusics from "../../pages/popularmusic"
import Albums from "../../pages/albums"
import Movies from "../../pages/movie"
import NotFound from "../../pages/notfound"
import Single from "../../pages/single"

function Router(){
    return(
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/video" element={<Video/>}/>
            <Route path={`/:id`} element={<Single/>}/>
            <Route path="/serial" element={<Serial/>}/>
            <Route path="/popularmusic" element={<PopularMusics/>}/>
            <Route path="/albums" element={<Albums/>}/>
            <Route path="/movie" element={<Movies/>}/>
            <Route path="/*" element={<NotFound/>}/>

        </Routes>
    )
}

export default Router
