import NewMusics from "./newmusics"
import Bests from "./bests"
import Popular from "./popular"

function Aside(){
    return(
        <aside className="w-[33%]">
            <NewMusics/>
            <Bests/>
            <Popular/>
        </aside>
    )
}

export default Aside