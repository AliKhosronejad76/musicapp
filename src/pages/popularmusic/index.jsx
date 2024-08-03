import Pageination from "../../components/pageination"
import PostItem from "../../components/postitem"

function PopularMusic(){
    return(
        <div className="w-full">
           <h1 className="text-bold text-xl mt-4">
             آهنگ های پرطرفدار 
           </h1>
           <div>    
            <PostItem/>
            <PostItem/>
            <PostItem/>
            <PostItem/>
            <PostItem/>
            <PostItem/>
            <PostItem/>


           </div>
           <Pageination/>
        </div>
    )
}

export default PopularMusic