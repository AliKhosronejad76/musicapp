function List({children}){
    return(
        <ul className="mt-3 mb-4 py-3 border-solid border-[#e9e9e9] border  rounded-xl [&>*:last-child]:border-none">
            {children}
        </ul>
    )
}

export default List