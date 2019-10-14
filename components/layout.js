import Head from "next/head";
import Heading from "./heading";
import Nav from "./nav";
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
      <header>
        <h1 className="Q">
          <Link href="/">
            <a>Q</a>
          </Link>
        </h1>
      </header>
      {children}
      <footer>
        {username ? (
          <Link href="/logout">
            <a>{username}</a>
          </Link>
        ) : (
          <Link href="/login">
            <a>Login</a>
          </Link>
        )}{" "}
        <Link href="/">
          <a>Another quote</a>
        </Link>
      </footer>
    </div>

    <style jsx>{`
      .Q {
        font-family: "Press Start 2P", cursive;
        font-size: 33px;
      }
      .Q a {
        color: white;
        text-decoration: none;
      }
      footer a {
        margin-right: 10px;
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
        }
        body {
          margin: 0;
          height: 100%;
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
          border: 16px solid #fff;
          display: flex;
          flex-direction: column;
        }
        main,
        .content {
          flex: 1;
        }
      `}
    </style>
  </>
);

export default Layout;
