import { IoMdHeart } from "react-icons/io"
import { BsDownload } from "react-icons/bs"

function Item({}){
    return(
        <li className="flex items-center border-b border-b-[#e2e2e2] py-3  px-3">
            <a href="#">
                <img className="rounded-lg " src="/img/tim.jpg" alt=""/>
            </a>
            <div className="mr-3">
                <a href="#" className="text-sm pt-4 text-gray-700">
                    دانلود آهنگ احسان دریا دل فردا
                </a>
                <div className="flex items-center mt-2  [&>div]:mx-3">
                    <div className="flex [&>span]:mr-2 text-gray-600 text-sm ">
                        <BsDownload />
                        <span>5230</span>
                    </div>

                    <div className="flex [&>span]:mr-2 text-gray-600 text-sm ">
                        <IoMdHeart />
                        <span>147</span>
                    </div>
                </div>
            </div>
        </li>
    )
}


export default Item 