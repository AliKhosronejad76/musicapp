import Navbar from "./navbar"
import Banner from "./banner"
function Header(){
    return(
        <>
            <div className="sticky z-[100]  top-0 transition duration-700">
                 <Navbar/> 
            </div>
             <div>
                <h1 className="text-center text-bold text-xl pt-8 pb-7">آهنگ های پیشنهادی</h1>
                <Banner/>
            
             </div>


        </>
    )
}

export default Header