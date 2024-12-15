import Logo from "./Logo"
import Menu from "./menu"
import { FiPhone } from "react-icons/fi"
import { RiSearchLine } from "react-icons/ri"
import { RxHamburgerMenu } from "react-icons/rx"

function Navbar(){
    return(
        <div className="[&>:nth-child(2)]:md:hidden bg-white w-full border-b border-[#e2e2e2] flex items-center justify-between py-2 px-2 md:px-[0px] [&>div]:flex ">
            <div className="[&>:nth-child(2)]:hidden [&>:nth-child(2)]:md:block" >
                <DrawerButton/>
                <Logo/>
                <Menu/>
            </div>
            <Logo/>
            <div className="flex items-center h-full">
                <button className="bg-transparent w-max h-[32px] mx-1 px-2 border border-[#3200c0] text-[#3200c0] flex items-center justify-between trasnition duration-300 hover:bg-[#3200c0] hover:text-white rounded-xl font-bold hover:[&>svg]:text-white">
                    <span className="hidden sm:block text-sm ml-3"> پخش آهنگ </span>
                    <FiPhone className=""/>
                </button>


                <button className="w-[40p] h-[40px] rounded-full mx-2 bg-transparent">
                 <RiSearchLine />
                </button>
            </div>
        </div>
    )
}


function DrawerButton(){
    return(
        <button className=" md:hidden flex items-center justify-center text-2xl text-gray-700 bg-transparent    text-gray-700">
           
            <RxHamburgerMenu/>
        </button>
    )
}


export default Navbar
