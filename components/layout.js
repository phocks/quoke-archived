import Head from "next/head";

import Heading from "./heading";
import Footer from "./footer";

const Layout = props => {
  const { children } = props;
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
        <link href="/css/all.min.css" rel="stylesheet"></link>
      </Head>

      <div className="container">
        <Heading />
        {children}
        {/* <Footer /> */}
      </div>
      {/* <div className={"sub-fold"}>Test.</div> */}

      <style jsx>
        {`
          .sub-fold {
            min-height: 300px;
            background-color: black;
            color: white;
          }
        `}
      </style>

      <style jsx global>
        {`
          @import url("https://fonts.googleapis.com/css?family=Inconsolata&display=swap");
          @import url('https://fonts.googleapis.com/css?family=Montserrat&display=swap');
          @import url('https://fonts.googleapis.com/css?family=Paytone+One&display=swap');
          html {
            height: 100%;
            font-family: 'Montserrat', sans-serif;
            line-height: 1.5;
          }
          body {
            margin: 0;
            height: 100%;
          }
          a {
            color: black;
          }
          button,
          input[type="submit"] {
            cursor: pointer;
          }
          #__next {
            height: 100%;
          }
          .container {
            min-height: 100%;
            display: flex;
            flex-direction: column;
          }
          main {
            background-color: white;
            color: #111;
            min-height: 100%;
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
            display: flex;
            justify-content: center;
          }
          main.article section {
            max-width: 720px;
            width: 100%;
          }
          .grid-item {
            max-width: 300px;
          }
        `}
      </style>
      {/* <script
        src="https://kit.fontawesome.com/7b433f5e25.js"
        crossOrigin="anonymous"
      ></script> */}
      {/* <script src="/js/masonry.pkgd.min.js"></script> */}
    </>
  );
};

export default Layout;
