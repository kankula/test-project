import { getStrapiURL } from '../utils'

export default function Universals() {

  return (
  <></>
  )
}
export async function getServerSideProps(context) {
    
  const res = await fetch(getStrapiURL('/new'))
  const data = await res.json()
 
   if (data.data !== null) {
    return {
      redirect: {
        destination: '/new',
        permanent: false,
      },
    }
  }

  return {
    redirect: {
      destination: '/home',
      permanent: false,
    },
  }
}
