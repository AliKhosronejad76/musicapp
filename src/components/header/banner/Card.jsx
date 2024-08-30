import { useEffect } from "react"
import { e2p } from "../../../e2p"
import { IoIosHeartEmpty } from "react-icons/io"
import { IoMdHeart } from "react-icons/io"
import { CiPlay1 } from "react-icons/ci"
import { CiPause1 } from "react-icons/ci"
import { BsDownload } from "react-icons/bs"
import { useMusicPlayer } from "../../../context/MusicPlayerProvider"

function Card({ img, name , artist , id , liked , downloaded}){ 
    const { isPlay , setIsPlay , audioRef , setCurrentSong , songs , currentSong} = useMusicPlayer()
  
    const downloadedcount = e2p(downloaded) 
    const likedcount = e2p(liked)

    const songHandler = ()=>{

        const selectedSong = songs.filter(item=> item.id  == id)
        setCurrentSong(selectedSong[0]) 
        setIsPlay(false)
        if(!isPlay){   
                   
            audioRef.current.play()
            setIsPlay(!isPlay)
        }else{
            audioRef.current.pause()
            setIsPlay(!isPlay)
        }
    }
    
    return(
        <div className="w-full sm:w-[48%] md:w-[32%] lg:w-[19%] mx-1 mb-7 py-2 px-2 rounded-xl border border-[#e9e9e9]"> 
           
            <img src={img} alt={name} className="rounded-lg px-1 mx-auto w-full"/>
            <p className="py-1 mt-3 text-center text-bold text-base text-gray-900">{name}</p>
            <p className="py-1 mb-2  text-center text-sm text-gray-600">{artist}</p>
            <div className="flex items-center justify-between text-gray-700">
                <div className="flex flex-col items-center  w-1/3">
                    <IoIosHeartEmpty /> 
                    <span className="mt-2 text-sm">
                        {likedcount}
                    </span>
                </div>

                <div className="w-1/3 flex items-center justify-center">
                    <button onClick={songHandler} className="text-white h-[37px] w-[37px] flex items-center justify-center rounded-full bg-[#3100be] shadow-sm">
                     
                     {isPlay && currentSong.id == id ? <CiPause1 className="text-lg text-center block max-auto font-[900]"/>:<CiPlay1 className="text-lg text-center block max-auto text-bold font-[900]" /> }
                    </button>
                </div>

                <div className="flex flex-col items-center w-1/3">
                 <BsDownload />
                 <span className="mt-2 text-sm">
                 {downloadedcount}
                 </span>
                </div>
            </div>
        </div>
    )
}

export default Card