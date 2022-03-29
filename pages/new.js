import Link from 'next/link'
import Image from 'next/image'
import { getStrapiURL } from '../utils'
import { getStrapiMedia } from '../utils'
const New = ({ pageData }) => {

  const { button, image } = pageData.attributes

  // console.log(image)

  return (
    <div className="d-flex vh-100 text-center text-white" style={{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${getStrapiMedia(image.data.attributes.url)})`, backgroundPosition: 'center'}}>

      <div className="container-lg d-flex w-100 p-3 mx-auto my-auto flex-column">
        <main className="px-3">
          <h1>{pageData.attributes.title}</h1>
          <p className="lead">{pageData.attributes.text}</p>
          <p className="lead">
            <Link href={button.href}><a className='btn btn-lg btn-secondary fw-bold bg-primary'>{button.label}</a></Link>
          </p>
        </main>
      </div>
    </div>
  )
}
export async function getServerSideProps(context) {

  const res = await fetch(getStrapiURL('/new?populate=%2A'))
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
    props: { pageData: data.data || null },
  }
}
export default New