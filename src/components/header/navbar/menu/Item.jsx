function Item({name}){
    return(
        <li className="mx-2">
            <a className="text-sm text-gray-700">
                {name}
            </a>
        </li>
    )
}

export default Item