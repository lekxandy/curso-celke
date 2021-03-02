import 'bootstrap/dist/css/bootstrap.min.css';
import Menu from '../components/Menu';
import Rodape from '../components/Rodape';
import Head from 'next/head';

export default function MyApp({ Component, pageProps }) {
    return (
      <>
        <Head>
            <link rel="icon" type="image/png" sizes="16x16" href="/favicon.png"></link>
        </Head>
        <Menu /> 
        <Component {...pageProps} />
        <Rodape />
      </>
    );
  }