import Head from "next/head";
import css from "./layout.scss";
import { useStoreState } from "easy-peasy";

const Layout = props => {
  const { children } = props;
  const title = useStoreState(state => state.title);
  return (
    <>
      <Head>
        <title>{props.title}</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
        />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="/css/normalize.css"></link>
        <link rel="stylesheet" href="/css/fontawesome.all.min.css"></link>
      </Head>

      <div className={css.container}>
        {children}
      </div>
    </>
  );
};

export default Layout;
