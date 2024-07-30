import Item from "./Item"

function Menu(){
    return(
        <ul className="flex mr-4 items-center">
            <Item name="آهنگ" />
            <Item name="آلبوم" />
            <Item name="ویدیو" />
            <Item name="سریال" />
            <Item name="فیلم" />
            <Item name="آهنگ های برطرفدار" />
        </ul>
    )
}

export default Menu