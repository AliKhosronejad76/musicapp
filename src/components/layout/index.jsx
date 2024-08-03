import Header from "../header"
import Footer from "../footer"
import ArtistsBox from "../artistsbox"
function Layout({children}){
    return(
        <>
            <Header/>
                {children}
            <ArtistsBox/>
            <Footer/>
        </>
    )
}

export default Layout