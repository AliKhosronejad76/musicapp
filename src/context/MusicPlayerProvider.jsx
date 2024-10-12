import { createContext , useContext  , useState , useRef } from "react";
import { playList } from "../data";
const PlayerContext = createContext();

export default function MusicPlayerProvider({ children }){
    const audioRef = useRef(null)
    const [ songs , setSongs ] = useState(playList)
    const [ currentSong , setCurrentSong ] = useState(songs[0])
    const [ isPlay , setIsPlay ] = useState(false)
    return(
        <PlayerContext.Provider value={{
            audioRef,
            songs,
            setSongs,
            currentSong,
            setCurrentSong,
            isPlay,
            setIsPlay

        }}>
            {children}
        </PlayerContext.Provider>
    )
}

export const useMusicPlayer = ()=> useContext(PlayerContext)