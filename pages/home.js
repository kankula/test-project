import React from 'react'
import Layout from '../components/layout'
import { getStrapiURL } from '../utils'
import BlockManager from '../components/ฺBlockManager'

function Home({ globalpage, navigation, homeData }) {

  const blocks = homeData.attributes.blocks;
  // console.log(blocks)
  return (

    <Layout globalpage={globalpage} navigation={navigation} >
       {blocks && <BlockManager blocks={blocks} />}
    </Layout>

  )
}
export async function getServerSideProps(context) {

  const res = await fetch(getStrapiURL('/home?populate[blocks][populate]=*'))
  const data = await res.json()

  return {
    props: { homeData: data.data || null },
  }
}
export default Home