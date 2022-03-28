import React from 'react'
import Layout from '../components/layout'
function Home({ globalpage, navigation, homeData }) {

  // console.log(navigation)
  return (

    <Layout globalpage={globalpage} navigation={navigation} >
      <div>{homeData.attributes.title}</div>
    </Layout>

  )
}
export async function getServerSideProps(context) {

  const res = await fetch(`http://localhost:1337/api/home`)
  const data = await res.json()

  return {
    props: { homeData: data.data || null },
  }
}
export default Home