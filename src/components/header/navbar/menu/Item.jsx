import { Link } from "react-router-dom"


function Item({name , linkTo}){
    console.log(linkTo)
    return(
        <li className="mx-2">
            <Link to={linkTo} className="text-sm text-gray-700">
                {name}
            </Link>
        </li>
    )
}

export default Item