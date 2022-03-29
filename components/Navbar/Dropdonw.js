import Link from "next/link"
const Dropdown = ({ label, genres }) => {
    // console.log(genres)
    const genreData = genres.data
    return (

        <li className="nav-item dropdown" aria-labelledby="navbarDropdownMenuLink">
            <a className="nav-link dropdown-toggle" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">{label}</a>
            <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <li>{genreData.map((item, i) => <Link key={i} href={`/genres/${item.attributes.slug}`}><a className="dropdown-item">{item.attributes.name}</a></Link>)}</li>
            </ul>
        </li>
    )
}
export default Dropdown