import React from 'react'
import Layout from '../components/layout'
import { getStrapiURL } from '../utils'
function Home({ globalpage, navigation, homeData }) {

  // console.log(navigation)
  return (

    <Layout globalpage={globalpage} navigation={navigation} >
      <div>{homeData.attributes.title}</div>
    </Layout>

  )
}
export async function getServerSideProps(context) {

  const res = await fetch(getStrapiURL('/home'))
  const data = await res.json()

  return {
    props: { homeData: data.data || null },
  }
}
export default Home