import { useState } from "react"
import { IoIosHeartEmpty } from "react-icons/io"
import { IoMdHeart } from "react-icons/io"
import { IoPlayOutline } from "react-icons/io5"
import { FaInstagram } from "react-icons/fa"
import { LiaTelegram } from "react-icons/lia"
import { FiDownload } from "react-icons/fi"
import { IoMdShare } from "react-icons/io"
import { PiDownloadSimple } from "react-icons/pi"
import { FaRegComment } from "react-icons/fa"


function MusicPost({ music }){
    const [liking , setliking] = useState(false)
    return(
        <div className="w-full bg-white rounded-xl shadow-lg p-4">
            <div className="flex items-center justify-between mb-3">
                <div className="flex w-max">
                    <a href="#" className="transition duration-700 text-sm text-sky-600 hover:text-gray-500">
                        آهنگ
                    </a>
                    <span className="mr-4 text-gray-400 text-sm"> 14 مرداد 1403</span>
                </div>

                <div className="flex w-max text-gray-500  transition duratipn-700 [&>svg]:hover:cursor-pointer">
                    <span className=" text-sm">2</span>
                    {liking ? <IoMdHeart className="mr-1" onMouseLeave={()=>setliking(false)}/>: <IoIosHeartEmpty onMouseEnter={()=>setliking(true)} className="mr-1"/>}
                   
                </div>
            
            </div>   

            <h1 className="text-right text-bold my-7">أانلود آهنگ اشکان هاشمی گل گندم</h1>     
        {/* {img} */}
            <div className="relative">
                <img src={music.cover} alt="" className="rounded-lg mb-3 relative mx-auto"/>
               <div className="w-full h-[45px] flex justify-center  absolute bottom-[-10px]">
                    <button className="flex justify-center items-center text-xl bg-white shadow-lg rounded-full w-[49px] h-[49px] transition duration-700 hover:bg-[#f1f1f1]">
                    <IoPlayOutline />
                    </button>
               </div>
           
            </div>
        {/* ing */}
        {/* text & description */}
        <div className="mx-auto text-center my-10">
            <p className="text-base mb-1">دانلود آهنگ جدید اشکان هاشمی به نام گل گندم</p>
            <p className="text-sm mb-1">Ashkan Hashemi – Gole Gandom</p>
            <p className="text-bold text-sm mb-1">اشکان هاشمی گل گندم</p>
            <p className="text-sm">هم اکنون موزیک گل گندم از اشکان هاشمی را دانلود و گوش دهید</p>
            <p className="text-sm">با تو چشم مردمم بیا یه چشم نظر بدم بهت بندازی دور گردنت</p>
        </div>
        {/* text & description */}

        <div className="flex justify-between mb-5">
             <SocialMediaButton text={"کانال تلگرام ما"} icon={<LiaTelegram/>}  textColor={"#1090bc"} backgroundColor="#eefbff" />
            <SocialMediaButton text="اینستاگرام ما" icon={<FaInstagram/>} textColor="#f92a81" backgroundColor={"#fff0f5"}/>
        </div>
        {/* downloadbox */}
        <div>
            <div className="flex justify-between px-3 mb-9 mt-6">
                <h1 className="text-bold">لینک های دانلود</h1>
                <FiDownload />
            </div>
            <DownloadButton text="دانلود آهنگ با کیفیت 128" />
            <DownloadButton text="دانلود آهنگ با کیفیت 320" />
        </div>
        {/* downloadbox */}
        
        <div className="flex justify-between mt-8 px-2 text-gray-600">
            <div className="w-[50%] flex justify-start [&>div]:mx-2">
                <div className="flex ">
                    <span>78</span>
                    <PiDownloadSimple className="mr-1" />
                </div>

                <div className="flex ">
                    <span>0</span>
                    <FaRegComment className="mr-1" />
                </div>
            </div>
            <div className="w-[50%] flex justify-end">
                <div className="flex items-center">
                    <span className="text-sm ">اشتراک</span>
                    <IoMdShare className="mr-2"/>
                </div>
            </div>
        </div>

        </div>
    )
}


function SocialMediaButton({ icon , text , backgroundColor , textColor}){
    return(
        <a  href="#" style={{
            color:textColor,
            background:backgroundColor,
        }}
            className="rounded-lg w-[49%] py-3 px-3 flex items-center justify-between "
        >
                <span style={{color:textColor}} className="text-sm inline">{text}</span>
                <div className="text-2xl">
                 {icon}

                </div>

        </a>
    )
}

function DownloadButton({text , href="" }){
    return(
      <a href={href} className="w-full flex py-4 justify-center bg-[#7229ea] text-white mb-3 rounded-lg shadow-sm transition duration-700 hover:bg-[#5f22e3]">
            <span>{text}</span>
      </a>
    )
}
export default MusicPost
