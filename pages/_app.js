import '../styles/globals.css'
import App from "next/app";
import { QueryClient, QueryClientProvider } from "react-query";

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
    fetch("http://localhost:1337/api/global?populate[footer][populate]=*"),
    fetch("http://localhost:1337/api/navigation?populate[logo][populate]=*&populate[navmenu][populate]=*"),
  ])
  const globaldata = await globalRes.json()
  const navigation = await navigationRes.json()

  return { ...appProps, pageProps: { globalpage: globaldata, navigation: navigation.data.attributes } };


};
export default MyApp
