import PostItem from "../../components/postitem"
import Pageination  from "../../components/pageination"
import {playList} from "../../data.js"
function Movies(){
    return(
        <div className="w-full">
            <h1 className="text-bold text-xl mt-4"> فیلم ها</h1>
          <div>
             {playList.map((item , index )=><PostItem key={index} post={item} />)}

          </div>
         <Pageination/>
        </div>
    )
}

export default Movies
