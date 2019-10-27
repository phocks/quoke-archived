import Head from "next/head";
import Heading from "./heading";

import Footer from "./footer";

const Layout = props => {
  const { children, username } = props;
  return (
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

      <div className="container">
        <Heading username={username} />
        {children}
        <Footer />
      </div>

      <style jsx global>
        {`
          @import url("https://fonts.googleapis.com/css?family=Grenze&display=swap");
          @import url("https://fonts.googleapis.com/css?family=Roboto&display=swap");
          @import url("https://fonts.googleapis.com/css?family=Press+Start+2P&display=swap");
          html {
            height: 100%;
            font-family: "Roboto", sans-serif;
            line-height: 1.5;
            background-color: #222;
          }
          body {
            margin: 0;
            height: 100%;
            color: #222;
          }
          a {
            color: #222;
          }
          button,
          input[type="submit"] {
            cursor: pointer;
          }
          #__next {
            height: 100%;
          }
          .container {
            background: #222;
            min-height: 100%;
            display: flex;
            flex-direction: column;
          }
          main {
            background-color: white;
            color: #111;
            flex: 1;
            padding-top: 16px;
            padding-bottom: 16px;
            padding-left: 16px;
            padding-right: 16px;
          }
          main.mid {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
          }
          main.article {
            font-size: 20px;
            display: flex;
            justify-content: center;
          }
          main.article section {
            max-width: 720px;
            width: 100%;
          }
        `}
      </style>
      <script
        src="https://kit.fontawesome.com/7b433f5e25.js"
        crossorigin="anonymous"
      ></script>
    </>
  );
};

export default Layout;
