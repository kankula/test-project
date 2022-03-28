import Footer from "./Footer"
import Navbar from "./Navbar"

const Layout = ({children, globalpage, navigation}) => {
    
    const {footer} = globalpage.data.attributes
    // console.log(footer)
    return (
        <>
        <Navbar navigation={navigation}/>
        {children}
        <Footer footer={footer}/>
        </>
    )
}
export default Layout