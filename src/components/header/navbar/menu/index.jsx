import Item from "./Item"

function Menu(){
    return(
        <ul className="hidden  md:flex mr-4 items-center">
            <Item linkTo={`/`} name="آهنگ" />
            <Item linkTo={`/albums`} name="آلبوم" />
            <Item linkTo={`/video`} name="ویدیو" />
            <Item linkTo={`/serial`} name="سریال" />
            <Item linkTo={`/movie`} name="فیلم" />
            <Item linkTo={`/popularmusic`} name="آهنگ های پرطرفدار" />
        </ul>
    )
}

export default Menu