import Header from "../header"


function Layout({children}){
    return(
        <>
            <Header/>
            {children}
            <div>
                footer
            </div>
        </>
    )
}

export default Layout