import Head from "next/head";
import Heading from "./heading";
import Nav from "./nav";

const Layout = ({ children }) => (
  <div>
    <Head>
      <title>Quoke</title>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1"
      ></meta>
      <link rel="icon" href="/favicon.ico" />
      <link rel="stylesheet" type="text/css" href="/css/normalize.css"></link>
    </Head>
    <div className="container">
      <div className="quoke-container">
        {/* <Nav /> */}
        {children}
      </div>
    </div>

    <style jsx>
      {`
        .quoke-container {
          max-width: 480px;
        }
      `}
    </style>

    <style jsx global>
      {`
        @import url("https://fonts.googleapis.com/css?family=Grenze&display=swap");
        * {
          box-sizing: border-box;
        }
        html {
          height: 100%;
          line-height: 1.5;
        }
        body {
          margin: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          height: 100%;
          background-color: #222;
          color: white;
        }
        a,
        a:visited,
        a:hover,
        a:active,
        a:focus {
          /* color: black; */
          text-decoration: none;
        }
      `}
    </style>
  </div>
);

export default Layout;
