import Header from "../header"
import Footer from "../footer"
import ArtistsBox from "../artistsbox"
import Aside from "../home/aside"
import PlayerBox from "../playerbox"


function Layout({children}){
    return(
        <>
            <Header/>
            <div className="flex flex-col md:flex-row w-full justify-between">
               <Aside/>
               <div className="w-full order-1 md:order-2  md:w-[64%] mr-1 pb-[40px]">
                {children}
               </div>            
            </div>
            <PlayerBox/>
            <ArtistsBox/>
            <Footer/>

        </>
    )
}
// lg:w-[64%]
export default Layout