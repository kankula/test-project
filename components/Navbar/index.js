import Link from 'next/link'
import NavManager from './navManager'
const Navbar = ({ navigation }) => {
    // console.log(navigation)
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <div className="container">
                    <Link href={navigation.logo.href}>
                        <a className="navbar-brand">{navigation.logo.label}</a>
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav ms-auto">
                            {navigation && <NavManager navigation={navigation} />}
                        </ul>
                    </div>
                </div>

            </nav>
        </>
    )
}
export default Navbar