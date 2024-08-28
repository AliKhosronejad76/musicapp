function NewMusics(){
    return(
        <div className="w-full">
            <h1 className="text-blod text-xl py-5">
                جدیدترین آهنگ ها
            </h1>

            <ul className="w-full mb-5 px-3 py-1 mt-1 bg-[#1a035a] rounded-xl">
                <Item name="دانلود آهنگ حامد اشرفی جوانی"/>
                <Item name="دانلود آهنگ حامد اشرفی جوانی"/>
                <Item name="دانلود آهنگ حامد اشرفی جوانی"/>
                <Item name="دانلود آهنگ حامد اشرفی جوانی"/>
                <Item name="دانلود آهنگ حامد اشرفی جوانی"/>
                <Item name="دانلود آهنگ حامد اشرفی جوانی"/>
                <Item name="دانلود آهنگ حامد اشرفی جوانی"/>
                

            
            </ul>
        </div>
    )
}

function Item({name}){
    return(
        <li className="my-3 py-1 px-2">
            <a href="#" className="w-full block  text-sm text-white font-[500] transition duration-800 hover:font-[700]">
                {name}
            </a>
        </li>
    )
}

export default NewMusics