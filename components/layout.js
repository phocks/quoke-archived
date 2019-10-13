import Head from "next/head";
import Heading from "./heading";
import Nav from "./nav";

const Layout = ({ children }) => (
  <>
    <Head>
      <title>Quoke</title>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1"
      ></meta>
      <link rel="icon" href="/favicon.ico" />
      <link rel="stylesheet" type="text/css" href="/css/normalize.css"></link>
    </Head>

    <div className="container">{children}</div>

    <style jsx>
      {`
        
      `}
    </style>

    <style jsx global>
      {`
        @import url("https://fonts.googleapis.com/css?family=Grenze&display=swap");
        @import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');
        @import url('https://fonts.googleapis.com/css?family=Press+Start+2P&display=swap');
        html {
          height: 100%;
          font-family: 'Roboto', sans-serif;
          color: white;
          line-height: 1.5;
        }
        body {
          margin: 0;
          height: 100%;
        }
        h1 {
          margin-top: 0;
        }
        #__next {
          height: 100%;
        }
        .container {
          background: #222;
          height: 100%;
          padding: 20px;
          border: 16px solid #eee;
        }
      `}
    </style>
  </>
);

export default Layout;
