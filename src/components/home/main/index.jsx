import PostItem from "../../postitem"
import Pageination from "../../pageination"
import { playList } from "../../../data" 

function Main(){
    return(
        <main className="w-full px-2 ">
            <h1 className="text-bold text-xl mt-4">آخرین ارسالی ها</h1>
       
            <div>
                {playList.map((item , index )=><PostItem key={index} post={item} />)}
    
            </div>
            <Pageination />
            
        </main>
    )
}

export default Main