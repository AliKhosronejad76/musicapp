import PostItem from "../../postitem"
import Pageination from "../../pageination"


function Main(){
    return(
        <main className="w-full px-2 ">
            <h1 className="text-bold text-xl mt-4">آخرین ارسالی ها</h1>
       
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
                <PostItem/>
            </div>
            <Pageination />
            
        </main>
    )
}

export default Main