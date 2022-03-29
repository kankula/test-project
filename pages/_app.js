import '../styles/globals.css'
import App from "next/app";
import { QueryClient, QueryClientProvider } from "react-query";
import { getStrapiURL } from '../utils';

import Head from "next/head";
import Script from "next/script"

function MyApp({ Component, pageProps }) {
  // console.log(pageProps)
  const queryClient = new QueryClient();
  return (
    <>
      <Head>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet"
          integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1"
          crossorigin="anonymous"
        />
      </Head>
      <Script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW"
        crossorigin="anonymous" />
      <QueryClientProvider client={queryClient}>
        <Component {...pageProps} />
      </QueryClientProvider>
    </>
  );
}
MyApp.getInitialProps = async (appContext) => {

  const appProps = await App.getInitialProps(appContext);


  const [globalRes, navigationRes] = await Promise.all([
    fetch(getStrapiURL("/global?populate[footer][populate]=*")),
    fetch(getStrapiURL("/navigation?populate[logo][populate]=*&populate[navmenu][populate]=*")),
  ])
  const globaldata = await globalRes.json()
  const navigation = await navigationRes.json()

  return { ...appProps, pageProps: { globalpage: globaldata, navigation: navigation.data.attributes } };


};
export default MyApp
