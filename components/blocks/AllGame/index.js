import { useEffect, useState } from "react";
import Link from "next/link";
import { getStrapiURL } from "../../../utils";
import { getStrapiMedia } from "../../../utils";
const AllGame = () => {
    const [game, setGame] = useState([])

    useEffect(() => {
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };

        fetch(getStrapiURL('/games?populate=%2A'), requestOptions)
            .then(response => response.json())
            .then(result => setGame(result.data))
    }, [])

    // console.log(allData)
 
    return (
        <div className="container row row-cols-1 row-cols-md-4 g-4 mx-auto" >

            {game.map((item, i) => {
                const image = item.attributes.image  
                return (
                    <div className="col pe-auto" key={i}>
                        <Link href={`/game/${item.attributes.slug}`}><a><div className="card" >
                            <img src={`${getStrapiMedia(image.data.attributes.url)}`} className="card-img-top"/>
                            <div className="card-body">
                                <h5 className="card-title">{item.attributes.title}</h5>
                            </div>
                        </div></a></Link>
                    </div>
                )
            }
            )}
        </div>
    )
}
// export async function getServerSideProps(context) {

//     const res = await fetch(getStrapiURL('/games?populate=%2A'))
//     const data = await res.json()
//     console.log(data)
//     return {
//       props: { allData: res || null },
//     }
//   }
export default AllGame