import PostItem from "../../components/postitem"
import Pageination  from "../../components/pageination"
function Movies(){
    return(
        <div className="w-full">
            <h1 className="text-bold text-xl mt-4"> فیلم ها</h1>
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

          </div>
         <Pageination/>
        </div>
    )
}

export default Movies