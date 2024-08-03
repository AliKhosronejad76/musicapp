function Pageination(){
    return(
        <div className="bg-white my-6  px-4 py-4 border-2 shadow-xl border-[#efefef] rounded-xl flex items-center justify-center">
                <Button count="1" />
                <Button count="2" />
                <Button count="3" />
                <Button count=">" />
                <Button count=">>" />

        </div>
    )
}

function Button({count}){
    return(
        <button className="shadow-xl mx-2 text-gray-700  border-2 border-[#efefef] w-[37px] h-[37px] rounded-full flex items-center leading-loose justify-center transition text-sm duration-700 hover:bg-[#e7e7e7]"> 
            {count}
        </button>
    )
} 

export default Pageination