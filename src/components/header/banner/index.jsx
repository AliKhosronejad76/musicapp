import Card from "./Card"
import { useMusicPlayer } from "../../../context/MusicPlayerProvider"

const src="https://bir-music.com/wp-content/uploads/2024/07/Ehsan Daryadel - Pas Farda-170x170.jpg"
function Banner(){
   const {songs} = useMusicPlayer()
    return(
        <div className="flex flex-wrap justify-between ">
             {
                songs.map((item , index )=><Card key={index} name={item.name} artist={item.artist} img={item.img} id={item.id} downloaded={"1200"} liked="40" />)
             }
         
        </div>
    )
}

export default Banner