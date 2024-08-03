import { useState } from "react"
import { FaArrowLeftLong } from "react-icons/fa6"
import List from "../bests/List"

function Popular(){
    return(
        <div>
            <h1 className="text-xl mb-4 mt-5">پربازدید ترین ها</h1>


            <List>
                <Item />
                <Item />
                <Item />
                <Item />
                <Item />
                <Item />
                <Item />
                <Item />

            </List>
        </div>
    )
}

function Item(){
    const [hover , setHover] = useState(false)
    return(
        <li className="py-4 px-4 border-b border-[#e2e2e2]">

            <a onMouseEnter={()=>setHover(true)} onMouseLeave={()=>setHover(false)} href="#" className="text-sm text-gray-700 flex items-center justify-between ">
                <span>
                    دانلود آهنگ هوروش بند شاید یه شب بارون
                </span>

                <div className={` ${hover? "bg-[#460aff] text-white " : "bg-white "} flex items-center justify-center w-[30px] h-[30px] rounded-full transition duration-300 arrow`}>
                    <FaArrowLeftLong />
                </div>
            </a>

        </li>
    )
} 



export default Popular