import { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import { useStoreState } from "easy-peasy";
import { useRouter } from "next/router";

const Layout = props => {
  const [showMenu, setShowMenu] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const router = useRouter();

  const handleSearchSubmit = event => {
    event.preventDefault();
    console.log(event);
    router.replace("/search?q=" + searchQuery);
  };

  const handleSearchChange = event => {
    setSearchQuery(event.target.value);
  };

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
          <div className={"option brand"}>
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
            <form method="get" action="/search" onSubmit={handleSearchSubmit}>
              <input
                type="search"
                placeholder="Search..."
                name="q"
                autoComplete="off"
                onChange={handleSearchChange}
                value={searchQuery}
              ></input>
            </form>
          </div>

          <div className={"option random"}>
            <Link href="/random">
              <a>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 10v7h10.797l1.594 2h-14.391v-9h-3l4-5 4 5h-3zm14 4v-7h-10.797l-1.594-2h14.391v9h3l-4 5-4-5h3z" />
                </svg>
              </a>
            </Link>
          </div>

          <div
            className={"option menu-option"}
            onClick={event => {
              setShowMenu(!showMenu);
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M12 18c1.657 0 3 1.343 3 3s-1.343 3-3 3-3-1.343-3-3 1.343-3 3-3zm0-9c1.657 0 3 1.343 3 3s-1.343 3-3 3-3-1.343-3-3 1.343-3 3-3zm0-9c1.657 0 3 1.343 3 3s-1.343 3-3 3-3-1.343-3-3 1.343-3 3-3z" />
            </svg>
          </div>
        </div>

        {showMenu && (
          <div className={"menu"}>
            <h3>Menu</h3>
            <div>
              <Link href="/about">
                <a>About</a>
              </Link>
            </div>
          </div>
        )}

        <main className={"content"}>{props.children}</main>
      </div>

      <style jsx>
        {`
          @import url("https://fonts.googleapis.com/css?family=IBM+Plex+Sans:400,700&display=swap");

          .header {
            border-bottom: 1px solid gainsboro;
            display: flex;
            align-items: center;
            margin-bottom: 2rem;
          }

          .brand {
            padding: 1rem 1rem;
            border-right: 1px solid gainsboro;
          }

          .random {
            padding: 1rem;
            border-left: 1px solid gainsboro;
          }

          .menu-option {
            padding: 1rem;
            border-left: 1px solid gainsboro;
            cursor: pointer;
            user-select: none;
          }

          .menu {
            position: absolute;
            right: 0;
            padding: 1rem;
            background-color: white;
            border-top: 1px solid gainsboro;
            border-left: 1px solid gainsboro;
            border-bottom: 1px solid gainsboro;
          }

          .search {
            flex: 1;
            font-size: 18px;
            padding-left: 0.5rem;
            padding-right: 0.5rem;
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
          }
        `}
      </style>

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
            line-height: 1.3;
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
