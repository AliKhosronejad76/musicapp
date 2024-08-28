import PostItem from "../../components/postitem"
import Pageination from "../../components/pageination"

function Video(){
    return(
        <div className="w-full">
            <h1 className="text-bold text-xl mt-4"> موزیک ویدیو ها</h1>
            <div>
            <PostItem/>
               <PostItem/>
               <PostItem/>
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

export default Video