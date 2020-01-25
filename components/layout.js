import Head from "next/head";
import css from "./layout.scss";
import { useStoreState } from "easy-peasy";

import Heading from "../components/heading";
import Search from "../components/search";
import Foot from "../components/foot";

const Layout = props => {
  const { children } = props;
  return (
    <>
      <Head>
        <title>{props.title || useStoreState(state => state.title)}</title>
        {/* <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
        /> */}
        <meta name="viewport" content="width=768"></meta>
        {/* <link rel="icon" href="/favicon.ico" /> */}
        <link rel="icon" type="image/png" href="/icons/favorite-7-240.png" />
        <link rel="stylesheet" href="/css/normalize.css"></link>
        <script
          data-ad-client="ca-pub-4754239438008393"
          async="async"
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
        ></script>
      </Head>

      <div className={css.container}>
        <header>
          <Heading />
          <Search />
        </header>
        <main className={css.content}>{children}</main>
        <footer>
          <Foot />
        </footer>
      </div>
    </>
  );
};

export default Layout;
