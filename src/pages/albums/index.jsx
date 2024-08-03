import { useLocation } from 'react-router-dom'
import PostItem from "../../components/postitem"


function Albums(){
    
    return(
        <div className="w-full">
            <h1 className="text-bold text-xl mt-4" >آلبوم ها </h1>
            <PostItem/>
            <PostItem/>
            <PostItem/>
            <PostItem/>
            <PostItem/>
            <PostItem/>

        </div>
    )
}

export default Albums