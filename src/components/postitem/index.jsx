import { useState } from "react"
import { IoIosHeartEmpty } from "react-icons/io"
import { BsDownload } from "react-icons/bs"
import { FaRegCommentDots } from "react-icons/fa6"
import { CiPlay1 } from "react-icons/ci"
import { HiMiniArrowLongLeft } from "react-icons/hi2"
import { Link , useLocation } from "react-router-dom"

function PostItem(){
    return(
        <div className="w-full rounded-xl shadow-2xl px-2 py-4 my-6 flex flex-col md:flex-row ">
            <img src={"/img/DjArash.jpg"} className="rounded-xl " />

            <div className="flex flex-col items-start mr-4">
                <div className="flex items-center mt-5 md:mt-[0px] mb-5">
                     <a className="ml-5 bg-[#edf7fa] text-sm text-[#3ca5c8] px-2 py-1 rounded-lg">
                        دسته بندی
                     </a>
                    <p className="text-sm ">11 مرداد 1399</p>
                </div>

                <div className="flex flex-col  mt-1">
                    <h3 className="mb-1 text-bold">دانلود آهنگ دیجی آرش Never Stop</h3>
                    <p className="text-sm text-gray-400">
                    دانلود آهنگ جدید دیجی آرش به نام Never Stop Dj Arash - Never Stop دیجی آرش Never 
                    </p>
                </div>


                {/* {actions} */}
                    <div className="w-full flex justify-between items-center  mt-10">
                        <div className="hidden invisible  lg:flex lg:visible">
                            <Col count="6" icon={<IoIosHeartEmpty/>}/>
                            <Col count="12" icon={<BsDownload/>}/>
                            <Col count="0" icon={<FaRegCommentDots/>}/>

                        </div>


                     <div className="w-full lg:w-[40%] flex items-center justify-end ml-3 lg:ml-[0px]">
                        <button className="w-[30px] h-[30px] rounded-full flex items-center justify-center transition duration-400 text-gray-900 hover:text-gray-800">
                          <CiPlay1 />
                        </button>

                        <a href="#" className="flex  items-center lg:mr-4 text-gray-900 duration-400 transition hover:text-gray-700">
                            <span className="text-sm ">ادامه و دانلود</span>
                            <HiMiniArrowLongLeft className="mr-2"/>
                        </a>

                      </div>
                    </div>

                {/* {actions} */}

           
            </div>
        </div>
    )
}



function Col({icon , count }){
    return(
        <div className="flex flex-col items-center mx-1.5 text-gray-500">
            <div className="text-base mb-1">
                {icon}
            </div>
            <span className="text-sm ">
                {count}
            </span>
        </div>
    )
}



    
     

  

export default PostItem