function List(){
    return(
        <div className="bg-[#0f8db8] w-full rounded-lg pb-4">
            <h1 className="text-bold text-white text-right mr-4 pt-5 text-lg lg:text-xl ">آرشیو خواننده ها </h1>

            <ul className="h-screen bg-trasparent  mt-3 px-3 overflow-y-scroll ml-3">
                <Item  name="عرفان طهماسبی"/>
                <Item  name="مجید رضوی"/>
                <Item  name="آرمین زارعی"/>
                <Item  name="معین زد"/>
                <Item  name="مهراد جم"/>
                <Item  name="آرون افشار"/>
                <Item  name="مسعود صادقلو"/>
                <Item  name="روزبه بمانی"/>
                <Item  name="رضا بهرام"/>
                <Item name="علی زند وکیلی"/>
                <Item name="علیرضا طلیسچی"/>
                <Item name="حامد برادران"/>
                <Item name="هوروش بند"/>
                <Item name="امین رستمی"/>
                <Item name="مهدی احمدوند"/>
                <Item name="محمد علیزاده"/>
                <Item name="محسن چاوشی"/>
                <Item name="سامان جلیلی"/>
                <Item name="اشوان "/>
                <Item name="علی زند وکیلی"/>
                <Item name="علیرضا طلیسچی"/>
                <Item name="حامد برادران"/>
                <Item name="هوروش بند"/>
                <Item name="امین رستمی"/>
                <Item name="مهدی احمدوند"/>
                <Item name="محمد علیزاده"/>
                <Item name="محسن چاوشی"/>
                <Item name="سامان جلیلی"/>
                <Item name="اشوان "/>
                <Item name="هوروش بند"/>
                <Item name="امین رستمی"/>
                <Item name="مهدی احمدوند"/>
                <Item name="محمد علیزاده"/>
                <Item name="محسن چاوشی"/>
                <Item name="سامان جلیلی"/>
                <Item name="اشوان "/>
            </ul>
        
        </div>
    )
}

function Item({name}){
    return(
        <li className="px-2 py-2 text-white text-sm lg:text-base">
            <a href="#">
                {name}
            </a>
        </li>
    )
}


export default List




