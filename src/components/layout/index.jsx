import Header from "../header"
import Footer from "../footer"
import ArtistsBox from "../artistsbox"
import Aside from "../home/aside"

function Layout({children}){
    return(
        <>
            <Header/>
            <div className="flex w-full justify-between">
               <Aside/>
               <div className="w-[64%] mr-1 ">
                {children}
               </div>            
            </div>

            <ArtistsBox/>
            <Footer/>

        </>
    )
}

export default Layout