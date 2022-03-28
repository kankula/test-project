import Link from "next/link"
const Navlink = ({href, label}) => {
    return (
        <>
        <Link href={href}>
            <a>{label}</a>
        </Link>
        </>
    )
}
export default Navlink