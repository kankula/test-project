const Dropdown = ({ label, genres }) => {
    // console.log(genres)
    const genreData = genres.data
    return (
        <div>
            <label>{label}</label>
            <div>{genreData.map((item, i) => <a key={i}>{item.attributes.name}</a>)}</div>
       </div>
    )
}
export default Dropdown