import Link from 'next/link'
const New = ({pageData}) => {
    //  console.log(pageData)
  
    return (
        <>
        <h1>{pageData.attributes.title}</h1>
        <Link href={'/home'}>go home</Link>
        </>
    )
} 
export async function getServerSideProps(context) {
    
    const res = await fetch(`http://localhost:1337/api/new`)
    const data = await res.json()
   
     if (data.data === null) {
      return {
        redirect: {
          destination: '/',
          permanent: false,
        },
      }
    }
  
    return {
      props: {pageData: data.data || null}, 
    }
  }
export default New