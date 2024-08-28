import { TbPlayerSkipForward } from "react-icons/tb"
import { TbPlayerSkipBack } from "react-icons/tb"
import { CiPlay1 } from "react-icons/ci"
import { CiPause1 } from "react-icons/ci"


function PlayerBox(){
    return(
        <div className="fixed w-[82%] left-[9%] right-[9%] shadow-xl bottom-10 bg-white/85 flex justify-between py-2.5  px-6 rounded-lg ">
               <div className="flex items-center">
                 <img src="/img/timthumb.jpg" className="rounded-lg"/>
                <div className="h-full  mr-3 flex flex-col items-center justify-center">
                    <h3 className="text-bold text-base ">
                        شب عشق
                    </h3>
                    <span className="font-[200]  text-sm">
                        بهنام بانی
                    </span>
                </div>
               </div>


               {/* actions */}
                <div className="flex items-center font-[500]">
                    <div className="ml-3 h-full flex items-center  ">0:00</div>
                    <div className="w-max flex items-center font-[700]  [&>button]:mx-2.5">
                        <button>
                            <TbPlayerSkipForward />
                        </button>
                          <PlayerButton/>
                        <button>
                        <TbPlayerSkipBack />
                        </button>
                    </div>
                </div>


               {/* actions */}

        </div>
    )
}

function PlayerButton(){
    return(
        <button className="bg-[#3200c0] text-white flex items-center justify-center w-[36px] h-[36px] rounded-full shadow-sm">
          <CiPlay1 />
        </button>
    )
}

export default PlayerBox