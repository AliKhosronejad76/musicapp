import NewMusics from "./newmusics"
import Bests from "./bests"
import Popular from "./popular"

function Aside(){
    return(
        <aside className="w-full  md:w-[33%] order-2 md:order-1">
            <NewMusics/>
            <Bests/>
            <Popular/>
        </aside>
    )

    // lg:w-[33%]
}

export default Aside