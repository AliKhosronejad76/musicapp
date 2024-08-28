import { useState } from "react"
import Year from "./Year"
import Month from "./Month"
import Week from "./Week"


function Bests(){
    const [state , setState] = useState(1)
    return(
        <div className="my-4 ">
            <div className="flex items-center justify-between">
                <h1>برترین ها </h1>

                <div className="flex py-2 [&>button]:mx-1 [&>button]:px-2 [&>button]:py-1 [&>button]:rounded-md  [&>button]:transition [&>button]:duration-300">
                    <button className={`${state === 1 ? "text-[#3100bf] bg-[#f3eefc]" : "text=gray-800 bg-white"} `} onClick={()=>setState(1)}>
                        هفته
                    </button>
                    <button className={`${state === 2 ? "text-[#3100bf] bg-[#f3eefc]" : "text=gray-800 bg-white"} `} onClick={()=>setState(2)}>
                        ماه
                    </button>
                    <button className={`${state === 3 ? "text-[#3100bf] bg-[#f3eefc]" : "text=gray-800 bg-white"} `} onClick={()=>setState(3)}>
                        سال
                    </button>
                </div>


            </div>

            { state === 1 && <Week/>  }
            { state === 2 && <Month/> }
            { state === 3 && <Year/>  }

        </div>
    )
}



export default Bests