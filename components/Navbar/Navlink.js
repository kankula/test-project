import Link from "next/link"
const Navlink = ({ href, label }) => {
    return (
        <li className="nav-item">
            <Link href={href}>
                <a className="nav-link">{label}</a>
            </Link>
        </li>
    )
}
export default Navlink