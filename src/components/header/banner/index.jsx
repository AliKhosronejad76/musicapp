import Card from "./Card"

const src="https://bir-music.com/wp-content/uploads/2024/07/Ehsan Daryadel - Pas Farda-170x170.jpg"
function Banner(){
    return(
        <div className="flex flex-wrap justify-between ">
                <Card img={src} name="فردا" artist="احسان دریا دل" liked="27" downloaded="1234" />
                <Card img={src} name="فردا" artist="احسان دریا دل" liked="27" downloaded="1234" />
                <Card img={src} name="فردا" artist="احسان دریا دل" liked="27" downloaded="1234" />
                <Card img={src} name="فردا" artist="احسان دریا دل" liked="27" downloaded="1234" />
                <Card img={src} name="فردا" artist="احسان دریا دل" liked="27" downloaded="1234" />
                <Card img={src} name="فردا" artist="احسان دریا دل" liked="27" downloaded="1234" />
                <Card img={src} name="فردا" artist="احسان دریا دل" liked="27" downloaded="1234" />
                <Card img={src} name="فردا" artist="احسان دریا دل" liked="27" downloaded="1234" />
                <Card img={src} name="فردا" artist="احسان دریا دل" liked="27" downloaded="1234" />
        </div>
    )
}

export default Banner