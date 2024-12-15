import PostItem from "../../components/postitem"
import Pageination from "../../components/pageination"
import {playList} from "../../data.js"
function Video(){
    return(
        <div className="w-full">
            <h1 className="text-bold text-xl mt-4"> موزیک ویدیو ها</h1>
            <div>
                 {playList.map((item , index )=><PostItem key={index} post={item} />)}
            </div>
           
           <Pageination/>

        </div>
    )
}

export default Video
