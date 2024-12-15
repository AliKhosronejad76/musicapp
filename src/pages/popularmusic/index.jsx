import Pageination from "../../components/pageination"
import PostItem from "../../components/postitem"
import {playeList} from "../../data.js"


function PopularMusic(){
    return(
        <div className="w-full">
           <h1 className="text-bold text-xl mt-4">
             آهنگ های پرطرفدار 
           </h1>
           <div>    
              {playList.map((item , index )=><PostItem key={index} post={item} />)}
           </div>
           <Pageination/>
        </div>
    )
}

export default PopularMusic
