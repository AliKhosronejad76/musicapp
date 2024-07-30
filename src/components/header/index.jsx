import Navbar from "./navbar"
import Banner from "./banner"
function Header(){
    return(
        <header>
             <Navbar/> 
             <div>
                <h1 className="text-center text-bold text-xl pt-8 pb-7">آهنگ های پیشنهادی</h1>
                <Banner/>
            
             </div>


        </header>
    )
}

export default Header