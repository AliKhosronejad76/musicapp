import PostItem from "../../components/postitem"

function Serial(){
    return(
        <div className="w-full">
           <h1 className="text-bold text-xl mt-4">
            سریال
          </h1>

          <div>
            <PostItem/>
            <PostItem/>
            <PostItem/>
            <PostItem/>
            <PostItem/>
            <PostItem/>

          </div>
        </div>
    )
}

export default Serial