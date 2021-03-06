// import App from 'next/app'
import { createGlobalStyle } from "styled-components";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Styles />
      <Component {...pageProps} />
    </>
  );
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);
//
//   return { ...appProps }
// }

export default MyApp;

const Styles = createGlobalStyle`
    html,
    body {
        padding: 0;
        margin: 0;
        font-family: 'Nunito', sans-serif;
    }
    button {
      cursor: pointer;
    }
`;
