const Footer = ({ footer }) => {
    // console.log(footer)
    return (
        <footer>
           <h1>{footer.title}</h1>
           <h3>{footer.copyright}</h3>
        </footer>
    )
}
export default Footer