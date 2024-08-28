import { useState } from "react"

function Comments(){
    const [name ,setName] = useState()
    const [email , setEmail] = useState()

    return(
        <div className="bg-white rounded-lg shadow-xl py-5 px-3">
            <h1 className="my-2 mb-4 text-bold text-lg">نظرات</h1>

            <div>
                <form>
                    <input type="text" className="w-full rounded-lg border border-[#e9e9e9] px-2 py-3 text-sm text-gray-700 mb-4 outline-none" value={name}/>
                    <input type="text" className="w-full rounded-lg border border-[#e9e9e9] px-2 py-3 text-sm text-left text-gray-700 mb-4 outline-none" placeholder="آدرس ایمیل" value={email}/>
                    <textarea 
                     className="w-full min-h-[200px] rounded-lg border border-[#e9e9e9] text-sm px-2 py-3  text-gray-700 mb-4 outline-none"
                     name="comment" id="comment" 
                    />

                    <div className="w-full flex justify-end my-3">
                        <button className="bg-[#3100bf] py-3.5 px-5 rounded-lg text-white text-sm">
                            ارسال نظر
                        </button>
                    </div>
               
                </form>
            </div>
        
        </div>
    )
}


export default Comments