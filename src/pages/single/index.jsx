import { useParams } from "react-router-dom"
import MusicPost from "./MusicPost"
import List from "./List"
import Comments from "./Comments" 

function Single(){
    const {id} = useParams()
    return(
        <div className="flex flex-col md:flex-row justify-between">
            <h1 className="text-7xl"> {id}</h1>
            <div className="w-full md:w-[70%]">
                <MusicPost/>
                {/* more post box */}
                <Comments />
            </div>
            <aside className="w-full md:w-[29%] px-3">
                <List/>
            </aside>
        </div>
    )
}



export default  Single
