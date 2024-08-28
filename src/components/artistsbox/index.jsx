function ArtistsBox(){
    return(
        <div className="overflow-x-scroll lg:overflow-x-visible flex justify-between py-3 lg:py-5 my-6   artists">
            <Item img="/img/artists/erfan.jpg"  artist="عرفان طهماسبی"/>
            <Item img="/img/artists/meradjam.jpg"  artist="مهراد جم"/>
            <Item img="/img/artists/aron.jpg"  artist="آرون افشار"/>
            <Item img="/img/artists/masoudsadeghlo.jpg"  artist="مسعود صادقلو"/>
            <Item img="/img/artists/bemani.jpg"  artist="روزبه بمانی"/>
            <Item img="/img/artists/rezabahram.jpg"  artist="رضا بهرام"/>
            <Item img="/img/artists/alizandvakili.jpg"  artist="علی زند وکیلی"/>
            <Item img="/img/artists/horoshband.jpg"  artist="هوروش بند"/>
            <Item img="/img/artists/mehdiahmadvand.jpg"  artist="مهدی احمدوند"/>
        </div>
    )
}

function Item({ img , artist }){
    return(
        <div className="mx-2 lg:mx-[0px] flex flex-col items-center ">
            <div className="w-[80px] h-[80px] lg:w-[92px] lg:h-[92px] rounded-full transition duration-500 hover:outline-gray-600 hover:outline-dashed hover:outline-2 hover:outline-offset-2 ">
                <a href="">
                    <img src={img} alt={artist} className=" w-full h-full rounded-full" />
                </a>
            </div>
            <a className="mt-4 text-sm text-center">{artist}</a>
        </div>
    )
}


export default ArtistsBox


