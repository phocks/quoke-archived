import Head from "next/head";
import css from "./layout.scss";
import { useStoreState } from "easy-peasy";

import Heading from "../components/heading";
import Foot from "../components/foot";

const Layout = props => {
  const { children } = props;
  return (
    <>
      <Head>
        <title>{props.title || useStoreState(state => state.title)}</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
        />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="/css/normalize.css"></link>
      </Head>

      <div className={css.container}>
        <header>
          <Heading />
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
