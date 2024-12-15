import { useLocation } from 'react-router-dom'
import PostItem from "../../components/postitem"
import {playList} from "../../data.js"

function Albums(){
    
    return(
        <div className="w-full">
            <h1 className="text-bold text-xl mt-4" >آلبوم ها </h1>
             {playList.map((item , index )=><PostItem key={index} post={item} />)}
        </div>
    )
}

export default Albums
