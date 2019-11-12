import Head from "next/head";
import css from "./layout.scss";
import { useStoreState } from 'easy-peasy';

import Heading from "./heading";
import Footer from "./footer";

const Layout = props => {
  const { children } = props;
  const title = useStoreState(state => state.title);
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
        />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" type="text/css" href="/css/normalize.css"></link>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
      </Head>

      <div className={css.container}>
        <Heading />
        {children}
        {/* <Footer /> */}
      </div>
    </>
  );
};

export default Layout;
