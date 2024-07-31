import Telegram from "./Telegram"
import Rubika from "./Rubika"
import Instagram from "./Instagram"


function Footer(){
    return(
        <footer className="bg-[#1b045b] rounded-lg ">
            <h1 className="text-center na text-2xl text-white pt-8 pb-7">
                بیرموزیک
            </h1>
            <p className="text-sm text-white text-center pb-5 tracking-widest font-medium">
            دانلود و پخش آنلاین آهنگ های جدید ایرانی در بیرموزیک
            </p>
            <ul className="w-full justify-center mx-auto flex py-4 [&>li]:mx-2.5">
                <Rubika/>
                <Telegram/>
                <Instagram/>
            </ul>

            <p className="text-center text-sm  text-white my-1 pb-5">
            هر گونه کپی برداری از طرح قالب یا مطالب پیگرد قانونی داردکلیه حقوق این وب سایت متعلق به وب سایت بیرموزیک می باشد.
            </p>
        </footer>
    )
}

export default Footer