import Head from "next/head";
import Heading from "./heading";
import Link from "next/link";

const Layout = ({ children, username }) => (
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
      <footer>
        <Link href="/random">
          <a className={"no-underline"}>&#x1f500;</a>
        </Link>
      </footer>
    </div>

    <style jsx>{`
      footer a {
        margin-right: 10px;
      }
      .no-underline {
        text-decoration: none;
      }
    `}</style>

    <style jsx global>
      {`
        @import url("https://fonts.googleapis.com/css?family=Grenze&display=swap");
        @import url("https://fonts.googleapis.com/css?family=Roboto&display=swap");
        @import url("https://fonts.googleapis.com/css?family=Press+Start+2P&display=swap");
        html {
          height: 100%;
          font-family: "Roboto", sans-serif;
          color: white;
          line-height: 1.5;
          background-color: #222;
        }
        body {
          margin: 0;
          height: 100%;
          background-color: #222;
        }
        a {
          color: white;
        }
        h1 {
          margin-top: 0;
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
          padding: 20px;
          /* border: 16px solid #fff; */
          display: flex;
          flex-direction: column;
        }
        main {
          flex: 1;
        }
        main.mid {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding-left: 5px;
          padding-right: 5px;
        }
        main.article {
          padding-top: 16px;
          display: flex;
          justify-content: center;
        }
        main.article section {
          max-width: 960px;
        }
      `}
    </style>
  </>
);

export default Layout;
