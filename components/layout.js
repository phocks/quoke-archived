import Head from "next/head";
import css from "./layout.scss";
import { useStoreState } from "easy-peasy";

import Heading from "../components/heading";
import Search from "../components/search";
import Foot from "../components/foot";
import RightButtons from "../components/rightButtons";

const Layout = props => {
  const { children } = props;
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
        />
        {/* <meta name="viewport" content="width=768"></meta> */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" href="/icons/favorite-7-240.png" />
        <link rel="stylesheet" href="/css/normalize.css"></link>
        <title>{props.title || useStoreState(state => state.title)}</title>
      </Head>

      <div className={css.container}>
        <header>
          {/* <Heading /> */}
          {/* <Search /> */}
        </header>
        <main className={css.content}>{children}</main>
        <footer>
          <RightButtons />
          {/* <Foot /> */}
        </footer>
      </div>

      {/* To stop font flickering in Chrome we need to use style jsx global */}
      <style jsx global>
        {`
          @font-face {
            font-family: "GilroyExtraBold";
            src: url("/fonts/Gilroy-ExtraBold.woff") format("woff");
          }

          @font-face {
            font-family: "GilroyLight";
            src: url("/fonts/Gilroy-Light.woff") format("woff");
          }
        `}
      </style>
    </>
  );
};

export default Layout;
