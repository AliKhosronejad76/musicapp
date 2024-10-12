import { useEffect , useState , useRef  } from "react"
import { TbPlayerSkipForward } from "react-icons/tb"
import { TbPlayerSkipBack } from "react-icons/tb"
import { CiPlay1 } from "react-icons/ci"
import { CiPause1 } from "react-icons/ci"
import { useMusicPlayer } from "../../context/MusicPlayerProvider"
import { e2p } from "../../e2p"



function PlayerBox(){
    const { currentSong , setCurrentSong ,audioRef , isPlay , setIsPlay , songs } = useMusicPlayer()
    const checkFirstRender = useRef(true);
    console.log(audioRef)
    // useEffect(()=>{
    //     setIsPlay(false)
    // },[])

    useEffect(()=>{
        // skip first render useEffect
        if (checkFirstRender.current) {
            checkFirstRender.current = false;
            return;
          }
        // skip first render useEffect

        // if(!isPlay){
        //    audioRef.current.play()           
            // setIsPlay(true)
        // }
        audioRef.current.play()           
        setIsPlay(true)

      

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
        const  result =   Math.floor( time / 60 ) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
        return e2p(result)
    }
    const skipForward = (currentSong , songs )=>{
        let selectedId = currentSong.id 
        if(selectedId < songs.length){
            selectedId++
           const selectedSong = songs.filter(item=> item.id == selectedId)
           setCurrentSong(selectedSong[0])
           setIsPlay(false)
           audioRef.current.play()
           setIsPlay(false)
        }
    }

    const skipBack = (currentSong , songs )=>{
        let selectedId  = currentSong.id
      
        if(selectedId > 1){
         selectedId--
         const selectedSong = songs.filter(item=> item.id === selectedId)
         setCurrentSong(selectedSong[0])
         setIsPlay(false)
         audioRef.current.play()
         setIsPlay(false)
        }else{
            return
        }
    }

    return(
        <div className="fixed w-[82%] left-[9%] right-[9%] shadow-xl bottom-10 bg-white/85 flex justify-between py-2.5  px-6 rounded-lg ">
               <div className="flex items-center">
                 <img src={currentSong.img} className="rounded-lg max-w-[50px] max-h-[50px]"/>
                <div className="h-full  mr-3 flex flex-col items-center justify-center">
                    <h3 className="text-bold text-base ">
                        {currentSong.name}
                    </h3>
                    <span className="fat text-sm text-gray-600">
                      {currentSong.artist}
                    </span>
                </div>
               </div>


               {/* actions */}
                <div className="flex items-center font-[500]">
                    <div className="ml-3 h-full flex items-center  "><p>{timeFormater(info.currentTime)}</p></div>
                    <div className="w-max flex items-center font-[700]  [&>button]:mx-2.5">
                        <button onClick={()=>skipForward(currentSong , songs)}>
                            <TbPlayerSkipForward />
                        </button>
                         <PlayerButton 
                         audioRef={audioRef} isPlay={isPlay} setIsPlay={setIsPlay}/>
                        <button onClick={()=>skipBack(currentSong , songs)}>
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