import Link from 'next/link'
import NavManager from './navManager'
const Navbar = ({ navigation }) => {
    // console.log(navigation)
    return (
        <>
            <nav>
                <Link href={navigation.logo.href}>
                    <a>
                        <h3>{navigation.logo.label}</h3>
                    </a>
                </Link>
                <div> {navigation && <NavManager navigation={navigation} />}</div>
            </nav>
        </>
    )
}
export default Navbar