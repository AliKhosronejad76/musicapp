import Logo from "./Logo"
import Menu from "./menu"
import { FiPhone } from "react-icons/fi"
import { RiSearchLine } from "react-icons/ri"

function Navbar(){
    return(
        <div className="z-10 bg-white w-full border-b border-[#e2e2e2] flex items-center justify-between py-2 [&>div]:flex ">
            <div >
                <Logo/>
                <Menu/>
            </div>
            <div className="flex items-center h-full">
                <button className="w-[125px] h-[32px] mx-1 px-2 border border-[#3200c0] text-[#3200c0] flex items-center justify-between trasnition duration-300 hover:bg-[#3200c0] hover:text-white rounded-lg font-bold hover:[&>svg]:text-white">
                    <span className="text-sm"> پخش آهنگ </span>
                    <FiPhone className=""/>
                </button>


                <button className="w-[40p] h-[40px] rounded-full mx-2">
                 <RiSearchLine />
                </button>
            </div>
        </div>
    )
}

export default Navbar