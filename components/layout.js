import Head from "next/head";
import Heading from "./heading";
import Link from "next/link";

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
        <script
          src="https://kit.fontawesome.com/7b433f5e25.js"
          crossorigin="anonymous"
        ></script>
      </Head>

      <div className="container">
        <Heading username={username} />
        {children}
        <footer>
          <Link href="/random">
            <a className={"no-underline"}>
              <i className="fas fa-random"></i>
            </a>
          </Link>
        </footer>
      </div>

      <style jsx>
        {`
          footer {
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: white;
            border-top: 1px #ddd dotted;
            min-height: 60px;
            color: #222;
          }
          footer a {
            margin-right: 10px;
            color: #222;
          }
          .no-underline {
            text-decoration: none;
          }
        `}
      </style>

      <style jsx global>
        {`
          @import url("https://fonts.googleapis.com/css?family=Grenze&display=swap");
          @import url("https://fonts.googleapis.com/css?family=Roboto&display=swap");
          @import url("https://fonts.googleapis.com/css?family=Press+Start+2P&display=swap");
          html {
            height: 100%;
            font-family: "Roboto", sans-serif;
            color: #222;
            line-height: 1.5;
            background-color: #222;
          }
          body {
            margin: 0;
            height: 100%;
            background-color: #222;
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
            /* padding: 20px; */
            /* border: 16px solid #fff; */
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
            max-width: 480px;
            width: 100%;
          }
        `}
      </style>
    </>
  );
};

export default Layout;
