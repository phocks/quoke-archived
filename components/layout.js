import Head from "next/head";

import HeadContents from "./head";

const Layout = ({ children }) => (
  <div>
    <Head>
      <title>Quoke - A few quotations</title>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1"
      ></meta>
      <link rel="icon" href="/static/favicon.ico" />
      <link rel="stylesheet" href="/static/normalize.css"></link>
      <link
        rel="stylesheet"
        href="https://unpkg.com/spectre.css/dist/spectre.min.css"
      />
      <link
        rel="stylesheet"
        href="https://unpkg.com/spectre.css/dist/spectre-exp.min.css"
      />
      <link
        rel="stylesheet"
        href="https://unpkg.com/spectre.css/dist/spectre-icons.min.css"
      />
      <link
        href="https://fonts.googleapis.com/css?family=Josefin+Sans&display=swap"
        rel="stylesheet"
      ></link>
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
