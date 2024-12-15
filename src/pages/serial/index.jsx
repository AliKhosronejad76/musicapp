import PostItem from "../../components/postitem"
import {playList} from "../../data.js"
function Serial(){
    return(
        <div className="w-full">
           <h1 className="text-bold text-xl mt-4">
            سریال
          </h1>

          <div>
          {playList.map((item , index )=><PostItem key={index} post={item} />)}

          </div>
        </div>
    )
}

export default Serial
