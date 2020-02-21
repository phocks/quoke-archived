import Head from "next/head";
import Link from "next/link";
import { useStoreState } from "easy-peasy";

const Layout = props => {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
        />
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" href="/icons/favorite-7-240.png" />
        <link rel="stylesheet" href="/css/normalize.css"></link>
        <title>{props.title || useStoreState(state => state.title)}</title>
      </Head>

      <div className={"container"}>
        <div className={"header"}>
          <div className={"brand"}>
            <Link href="/">
              <a>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="black"
                  viewBox="0 0 24 24"
                >
                  <path d="M18 1l-6 4-6-4-6 5v7l12 10 12-10v-7z" />
                </svg>
              </a>
            </Link>
          </div>
          <div className={"search"}>
            <input type="search"></input>
          </div>
        </div>

        <main className={"content"}>{props.children}</main>
        {/* <RightButtons /> */}
      </div>

      <style jsx>{`
        @import url("https://fonts.googleapis.com/css?family=Josefin+Sans|Josefin+Slab:700&display=swap");
        @import url("https://fonts.googleapis.com/css?family=IBM+Plex+Sans&display=swap");

        .header {
          border-bottom: 1px solid gainsboro;
          display: flex;
          align-items: center;
        }

        .brand {
          padding: 1rem 1rem;
          border-right: 1px solid gainsboro;
        }

        .search {
          flex: 1;
          font-size: 24px;
          padding-left: 1rem;
          padding-right: 1rem;
        }

        .search input {
          width: 100%;
          height: 100%;
          border: none;
          padding: 0.5rem;
        }

        .brand a {
          color: lightgray;
          text-decoration: none;
        }

        .content {
          padding-top: 6em;
        }
      `}</style>
      <style jsx global>
        {`
          @font-face {
            font-family: "GilroyExtraBold";
            src: url("/fonts/Gilroy-ExtraBold.woff") format("woff");
          }

          @font-face {
            font-family: "GilroyLight";
            src: url("/fonts/Gilroy-Light.woff") format("woff");
          }

          html {
            font-size: 16px;
          }

          body {
            margin: 0;
            font-family: "IBM Plex Sans", GilroyExtraBold, sans-serif;
            line-height: 1.2;
            color: black;
          }

          h1,
          h2,
          h3,
          h4,
          h5,
          h6 {
            margin-top: 0;
            margin-bottom: 1em;
          }

          p {
            margin-top: 0;
          }

          a {
            color: #46b6fc;
          }

          hr {
            border: 0;
            height: 0;
            border-bottom: 1px solid #dcdcdc;
            margin-top: 0;
            margin-bottom: 0;
          }

          button,
          input[type="submit"] {
            cursor: pointer;
          }

          button {
            background: none;
            padding: 10px;
            border: 1px solid #444;
            border-radius: 3px;
          }

          #__next {
            height: 100%;
          }

          .col {
            margin: auto;
            max-width: 600px;
            width: 100%;
            padding: 0 1rem;
          }

          .invert {
            filter: invert(1);
          }

          .absolute-center {
            flex: 1;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
          }

          svg {
            vertical-align: top;
          }
        `}
      </style>
    </>
  );
};

export default Layout;
