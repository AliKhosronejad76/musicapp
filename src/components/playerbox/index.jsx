import { useEffect , useState } from "react"
import { TbPlayerSkipForward } from "react-icons/tb"
import { TbPlayerSkipBack } from "react-icons/tb"
import { CiPlay1 } from "react-icons/ci"
import { CiPause1 } from "react-icons/ci"
import { useMusicPlayer } from "../../context/MusicPlayerProvider"

function PlayerBox(){
    const { currentSong , audioRef , isPlay , setIsPlay } = useMusicPlayer()
   
    useEffect(()=>{
        if(!isPlay){
           audioRef.current.play()
           setIsPlay(true)
           
        }

    },[currentSong])
    const [info , setInfo] = useState({
        currentTime : '0' , 
        duration:'0',
    })
   

    const timeHandler = (e)=>{
        const currentTime = e.target.currentTime;
        const duration = e.target.duration;
        setInfo({ ...info , currentTime , duration })
    }

    const timeFormater = (time)=>{
        return   Math.floor( time / 60 ) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
    }


    return(
        <div className="fixed w-[82%] left-[9%] right-[9%] shadow-xl bottom-10 bg-white/85 flex justify-between py-2.5  px-6 rounded-lg ">
               <div className="flex items-center">
                 <img src={currentSong.img} className="rounded-lg max-w-[50px] max-h-[50px]"/>
                <div className="h-full  mr-3 flex flex-col items-center justify-center">
                    <h3 className="text-bold text-base ">
                        {currentSong.name}
                    </h3>
                    <span className="font-[200]  text-sm">
                      {currentSong.artist}
                    </span>
                </div>
               </div>


               {/* actions */}
                <div className="flex items-center font-[500]">
                    <div className="ml-3 h-full flex items-center  "><p>{timeFormater(info.currentTime)}</p></div>
                    <div className="w-max flex items-center font-[700]  [&>button]:mx-2.5">
                        <button>
                            <TbPlayerSkipForward />
                        </button>
                         <PlayerButton 
                         audioRef={audioRef} isPlay={isPlay} setIsPlay={setIsPlay}/>
                        <button>
                        <TbPlayerSkipBack />
                        </button>
                    </div>
                </div>
                <audio  onLoadedMetadata={timeHandler}  onTimeUpdate={timeHandler} src={currentSong.src} ref={audioRef}/>

               {/* actions */}

        </div>
    )
}

function PlayerButton({ isPlay , setIsPlay , audioRef }){
    const songHandler = ()=>{
        if(!isPlay){
            audioRef.current.play()
            setIsPlay(!isPlay)
        }else{
            audioRef.current.pause()
            setIsPlay(!isPlay)
        }
    }

    return(
        <button onClick={songHandler} className="bg-[#3200c0] text-white flex items-center justify-center w-[36px] h-[36px] rounded-full shadow-sm">
          { isPlay ?  <CiPause1/> :  <CiPlay1 /> }
        </button>
    )
}

export default PlayerBox