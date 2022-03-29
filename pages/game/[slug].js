import Layout from "../../components/layout"
import { getStrapiURL } from "../../utils"
import { getStrapiMedia } from "../../utils"
const Game = ({ globalpage, navigation, gameData }) => {
    const [game] = gameData
    const image = game.attributes.image
    // console.log(image)
    return (
        <Layout globalpage={globalpage} navigation={navigation} >
            <div>
                <h1>{game.attributes.title}</h1>
                <img src={`${getStrapiMedia(image.data.attributes.url)}`} />
            </div>
        </Layout>
    )

}
export async function getServerSideProps(context) {

const { params } = context
const { slug } = params

    const res = await fetch(getStrapiURL(`/games?filters[slug][$eq]=${slug}&populate[image]=*`))
    const data = await res.json()

    return {
      props: { gameData: data.data || null },
    }
  }
export default Game