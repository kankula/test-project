import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Universals() {

  return (
  <></>
  )
}
export async function getServerSideProps(context) {
    
  const res = await fetch(`http://localhost:1337/api/new`)
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
