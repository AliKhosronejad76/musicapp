import { useState  , useEffect } from "react"
import { useParams } from "react-router-dom"
import MusicPost from "./MusicPost"
import List from "./List"
import Comments from "./Comments" 
import {playList} from "../../data.js"


function Single(){
    const {id} = useParams()
    const [musicData , setMusicData] = useState([]);
    useEffect(()=>{
        const setMusic = ()=>{
            const music = playList.filter(music=> music.id == id)
            setMusicData(music)
        }
        setMusic()
        console.log(musicData)
    },[id])
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
