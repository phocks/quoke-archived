import Head from "next/head";

import HeadContents from "./head";

const Layout = ({ children }) => (
  <div>
    <Head>
      <HeadContents />
    </Head>
    {children}

    <style jsx global>
      {`
        html {
          height: 100%;
        }
        body {
          font-family: "Josefin Sans", sans-serif;
          display: flex;
          align-items: center;
          justify-content: center;
          height: 100%;
        }
      `}
    </style>
  </div>
);

export default Layout;
