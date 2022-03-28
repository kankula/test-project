import '../styles/globals.css'
import App from "next/app";
import { QueryClient, QueryClientProvider } from "react-query";
import { getStrapiURL } from '../utils';

function MyApp({ Component, pageProps }) {
  // console.log(pageProps)
  const queryClient = new QueryClient();
  return (
    <>
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
